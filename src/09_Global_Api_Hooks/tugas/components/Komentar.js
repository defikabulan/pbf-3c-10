import React from "react";
import API from "../services/Komentar/index.";

function DaftarKomentar(props) {
  return (
    <div>
      <h3>{props.nama}</h3>
      <div>{props.isiKomentar}</div>
    </div>
  );
}

export default class Komentar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataKomentar: [], // untuk menampung data API
      postKomentar: {
        userId: 1,
        nama: "",
        komentar: "",
      },
    };
  }

  ambilDataDariServerAPI = () => {
    API.getNewsComment().then((result) => {
      this.setState({
        dataKomentar: result,
      });
    });
  };

  componentDidMount() {
    this.ambilDataDariServerAPI();
  }

  render() {
    const { dataKomentar, postKomentar } = this.state;

    return (
      <div>
        <div>
          <form onSubmit={this.handleTombolSimpan}>
            <label>
              Nama:
              <input
                type="text"
                name="nama"
                defaultValue={postKomentar.nama}
                onChange={this.handleOnChange}
              />
            </label>
            <label>
              Komentar:
              <input
                type="text"
                name="komentar"
                defaultValue={postKomentar.komentar}
                onChange={this.handleOnChange}
              />
            </label>
            <input type="submit" value="Simpan" />
          </form>
        </div>
        <hr></hr>
        <h2>Daftar Komentar</h2>
        {dataKomentar.map((komentar) => {
          return (
            <div key={komentar.id}>
              <DaftarKomentar
                nama={komentar.nama}
                isiKomentar={komentar.komentar}
              />
              <button value={komentar.id} onClick={this.handleTombolHapus}>
                Hapus
              </button>
              <hr></hr>
            </div>
          );
        })}
      </div>
    );
  }

  handleTombolSimpan = (e) => {
    e.preventDefault();

    API.postNewsComment(this.state.postKomentar).then((response) => {
      this.ambilDataDariServerAPI(); // refresh data
      alert("Data berhasil disimpan!");
    });
  };

  handleOnChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    this.setState((prevState) => {
      prevState.postKomentar[name] = value;
      return {
        postKomentar: prevState.postKomentar,
      };
    });
  };

  handleTombolHapus = (e) => {
    e.preventDefault();

    API.deleteNewsComment(e.target.value).then((response) => {
      this.ambilDataDariServerAPI(); // refresh data
      alert("Data berhasil dihapus!");
    });
  };
}
