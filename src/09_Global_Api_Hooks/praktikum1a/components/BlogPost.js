import React from "react";
import API from "../services";

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
      dataArtikel: [], // untuk menampung data API
    };
  }

  ambilDataDariServerAPI = () => {
    API.getNewsBlog().then((result) => {
      this.setState({
        dataArtikel: result,
      });
    });
  };

  componentDidMount() {
    this.ambilDataDariServerAPI();
  }

  render() {
    const { dataArtikel } = this.state;

    return (
      <div>
        <h2>Daftar Artikel</h2>
        {dataArtikel.map((artikel) => {
          return (
            <DaftarArtikel
              key={artikel.id}
              judul={artikel.title}
              isiArtikel={artikel.body}
            />
          );
        })}
      </div>
    );
  }
}
