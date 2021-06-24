//import API from "../services/Artikel";
import React from "react";
import {
  Button,
  Accordion,
  Card,
  Container,
  Form,
  Modal,
} from "react-bootstrap";
import { DB } from "../firebase.config";

function DaftarArtikel(props) {
  return (
    <div>
      <h3>{props.judul}</h3>
      <div>{props.isiArtikel}</div>
    </div>
  );
}

export default class BlogPost extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showEdit: false,
      dataArtikel: [], // untuk menampung data API
      postArtikel: {
        id: "",
        userId: 1,
        title: "",
        body: "",
      },
    };
  }

  ambilDataDariServerAPI = () => {
    let ref = DB.ref("articles/");
    ref.on("value", (snapshot) => {
      if (snapshot.val() !== null)
        this.setState({
          dataArtikel: snapshot.val(),
        });
    });
  };

  simpanDataKeServerAPI = () => {
    DB.ref("articles/").set(this.state.dataArtikel);
  };

  componentDidMount() {
    this.ambilDataDariServerAPI();
  }

  render() {
    const { dataArtikel, postArtikel, showEdit } = this.state;

    return (
      <div>
        <Container>
          <Form onSubmit={this.handleTombolSimpan}>
            <Form.Group controlId="inputJudul">
              <Form.Label>Judul Artikel</Form.Label>
              <Form.Control
                required
                type="text"
                name="title"
                placeholder="judul artikel"
                className="my-3"
                onChange={this.handleOnChange}
              />
            </Form.Group>
            <Form.Group controlId="inputIsiArtikel">
              <Form.Label>Isi Artikel</Form.Label>
              <Form.Control
                required
                name="body"
                as="textarea"
                rows={3}
                className="my-3"
                onChange={this.handleOnChange}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Simpan Artikel
            </Button>
          </Form>
        </Container>

        <hr />

        <h2>Daftar Artikel</h2>
        {(dataArtikel || []).map((artikel) => {
          return (
            <div key={artikel.id}>
              <Accordion defaultActiveKey="0">
                <Card>
                  <Card.Header>
                    <Accordion.Toggle
                      as={Card.Header}
                      variant="link"
                      eventKey="0"
                    >
                      <DaftarArtikel judul={artikel.title} />
                    </Accordion.Toggle>
                  </Card.Header>
                  <Accordion.Collapse eventKey="0">
                    <Card.Body>
                      <DaftarArtikel isiArtikel={artikel.body} />
                      <Button
                        variant="danger"
                        value={artikel.id}
                        style={{ marginRight: 10, marginTop: 10 }}
                        onClick={this.handleTombolHapus}
                      >
                        Hapus
                      </Button>
                      <Button
                        variant="warning"
                        value={artikel.id}
                        style={{ marginTop: 10 }}
                        onClick={this.handleTombolEdit}
                      >
                        Edit
                      </Button>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              </Accordion>
              {/* <DaftarArtikel judul={artikel.title} isiArtikel={artikel.body} /> */}
              {/* <Button variant="danger" value={artikel.id} onClick={this.handleTombolHapus}>Hapus</Button> */}
              <hr></hr>
            </div>
          );
        })}

        <Modal
          show={showEdit}
          onHide={() => this.setState({ showEdit: false })}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Edit Artikel
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Container>
              <Form onSubmit={this.handleTombolSimpan}>
                <Form.Group controlId="inputJudul">
                  <Form.Label>Judul Artikel</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    name="title"
                    value={postArtikel.title}
                    placeholder="judul artikel"
                    className="my-3"
                    onChange={this.handleOnChange}
                  />
                </Form.Group>
                <Form.Group controlId="inputIsiArtikel">
                  <Form.Label>Isi Artikel</Form.Label>
                  <Form.Control
                    required
                    name="body"
                    value={postArtikel.body}
                    placeholder="isi artikel"
                    as="textarea"
                    rows={3}
                    className="my-3"
                    onChange={this.handleOnChange}
                  />
                </Form.Group>
                <Button variant="primary" type="submit">
                  Update Artikel
                </Button>
              </Form>
            </Container>
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="danger"
              onClick={() => this.setState({ showEdit: false })}
            >
              Batal
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }

  handleTombolSimpan = (e) => {
    e.preventDefault();

    const { dataArtikel, postArtikel } = this.state;

    if (postArtikel.id && postArtikel.title && postArtikel.body) {
      const indeksArtikel = dataArtikel.findIndex((data) => {
        return data.id === postArtikel.id;
      });

      dataArtikel[indeksArtikel].title = postArtikel.title;
      dataArtikel[indeksArtikel].body = postArtikel.body;
      this.setState({ dataArtikel });
    } else if (postArtikel.title && postArtikel.body) {
      console.log(dataArtikel);
      const id = new Date().getTime().toString();
      let userId = 1; // TODO: set to username/email
      let title = postArtikel.title;
      let body = postArtikel.body;
      dataArtikel.push({ id, userId, title, body });
      this.setState({ dataArtikel });
    }

    postArtikel.id = "";
    postArtikel.title = "";
    postArtikel.body = "";
    this.setState({ postArtikel });
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState !== this.state.dataArtikel) {
      this.simpanDataKeServerAPI();
    }
  }

  handleOnChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    this.setState((prevState) => {
      prevState.postArtikel[name] = value;
      return {
        postArtikel: prevState.postArtikel,
      };
    });
  };

  handleTombolHapus = (e) => {
    e.preventDefault();

    const { dataArtikel } = this.state;

    const newState = dataArtikel.filter((data) => {
      return data.id !== e.target.value;
    });

    this.setState({ dataArtikel: newState });
    alert("Data berhasil dihapus!");
  };

  handleTombolEdit = (e) => {
    e.preventDefault();

    const { dataArtikel, postArtikel } = this.state;

    const updateData = dataArtikel.find((data) => {
      return data.id === e.target.value;
    });

    this.setState({ postArtikel: updateData, showEdit: true });
  };

  handleUpdateArtikel = (e) => {
    e.preventDefault();

    const { dataArtikel, postArtikel } = this.state;

    if (postArtikel.id !== null) {
      let id = postArtikel.id;
      const updateState = dataArtikel.find((data) => {
        return data.id === postArtikel.id;
      });
      updateState.userId = DB.currentUser.email;
      updateState.title = postArtikel.title;
      updateState.body = postArtikel.body;
      console.log(updateState);
      console.log(dataArtikel);
      console.log(postArtikel);
      console.log(e.target);
    }

    postArtikel.id = "";
    postArtikel.title = "";
    postArtikel.body = "";

    this.setState({ postArtikel, showEdit: false });
  };
}
