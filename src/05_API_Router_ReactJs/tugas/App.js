import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";

function Beranda() {
  return (
    <div class="card text-white bg-dark mb-3">
      <div class="card-header">Pengantar</div>
      <div class="card-body">
        <h3 class="card-title">API dan React Router di ReactJS</h3>
        <blockquote class="blockquote mb-0">
          <p>
            Pada codelab ini Anda akan mempelajari tentang pengambilan data
            melalui API (Application Programming Interface) dan membuat navigasi
            untuk berpindah halaman menggunakan React Router.
          </p>
        </blockquote>
      </div>
      <div class="card-body">
        <h3 class="card-title">Pengetahun yang Anda harus miliki</h3>
        <ul class="list-unstyled">
          <li>
            Sebelum memulai codelab ini, sebaiknya Anda memiliki pengetahuan
            dasar tentang:
            <ul>
              <li>Pemrograman dasar dengan HTML, CSS, dan JavaScript</li>
              <li>Cara membuat project baru di ReactJS</li>
              <li>Konsep DOM (Document Object Model)</li>
              <li>Konsep ReactJS Bagian 1</li>
              <li>Konsep ReactJS Bagian 2</li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
}

function Berita(props) {
  return (
    <div>
      <h3>{props.judul}</h3>
      <div>{props.isiArtikel}</div>
    </div>
  );
}

function Tentang() {
  return (
    <div class="card text-white bg-dark mb-3">
      <div class="card-header">Tentang</div>
      <div class="card-body">
        <h3>NIM: 1841720098</h3>
        <h3>Nama: Defika Bulan</h3>
      </div>
    </div>
  );
}

function Codelabs() {
  let match = useRouteMatch();

  return (
    <div class="card text-white bg-dark mb-3">
      <div class="card-header ">Codelab</div>
      <div class="card-body">
        <div
          class="btn-group"
          role="group"
          aria-label="Basic radio toggle button group"
        >
          <input
            type="radio"
            class="btn-check"
            name="btnradio"
            id="btnradio1"
            autocomplete="off"
            checked
          ></input>
          <Link to={`${match.url}/konsep-reactjs`}>
            <label class="btn btn-primary" for="btnradio1">
              Konsep ReactJS
            </label>
          </Link>

          <input
            type="radio"
            class="btn-check"
            name="btnradio"
            id="btnradio2"
            autocomplete="off"
          ></input>
          <Link to={`${match.url}/belajar-react-router`}>
            <label class="btn btn-primary" for="btnradio2">
              Belajar React Router
            </label>
          </Link>
        </div>
        {/* Pada halaman Codelabs ini memiliki <Switch> sendiri dengan beberapa route lagi
          di dalam URL /codelabs . Pada bagian route kedua merupakan route default atau
          jika tidak satu pun link topik dipilih. */}
        <Switch>
          <Route path={`${match.path}/:topicId`}>
            <Topik />
          </Route>
          <Route path={match.path}>
            <h3>Silakan Pilih Topik Codelab yang tersedia.</h3>
          </Route>
        </Switch>
      </div>
    </div>
  );
}

function Topik() {
  let { topicId } = useParams();
  return <h3>Topik yang terpilih: {topicId}</h3>;
}

class Blog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null, // jika terjadi gagal ambil data dari API
      isLoaded: false, // untuk status ketika sedang memuat
      dataArtikel: [], // untuk menampung data API
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then(
        (dataJson) => {
          this.setState({
            isLoaded: true,
            dataArtikel: dataJson,
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }
  render() {
    const { error, isLoaded, dataArtikel } = this.state;

    if (error) {
      return <div>Terjadi galat: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Sedang memuat...</div>;
    } else {
      return (
        <div class="card border-light">
          <div class="card-header">Daftar Artikel</div>
          <div class="card-body">
            {dataArtikel.map((artikel) => {
              return <Berita judul={artikel.title} isiArtikel={artikel.body} />;
            })}
          </div>
        </div>
      );
    }
  }
}

export default function App() {
  return (
    <Router>
      <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
          <div class="container-fluid">
            <a class="navbar-brand" href="#">
              TUGAS
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <Link to="/" class="nav-link">
                    <button type="button" class="btn btn-success">
                      Beranda
                    </button>
                  </Link>
                </li>
                <li class="nav-item">
                  <Link to="/berita" class="nav-link">
                    <button type="button" class="btn btn-success">
                      Berita
                    </button>
                  </Link>
                </li>
                <li class="nav-item">
                  <Link to="/tentang" class="nav-link">
                    <button type="button" class="btn btn-success">
                      Tentang
                    </button>
                  </Link>
                </li>
                <li class="nav-item">
                  <Link to="/codelabs" class="nav-link">
                    <button type="button" class="btn btn-success">
                      Codelabs
                    </button>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div class="card">
          <div class="card-body"></div>
          <div class="card-body">
            <blockquote class="blockquote mb-0">
              <Switch>
                <Route path="/berita">
                  <Blog />
                </Route>
                <Route path="/tentang">
                  <Tentang />
                </Route>
                <Route path="/codelabs">
                  <Codelabs />
                </Route>
                <Route path="/">
                  <Beranda />
                </Route>
              </Switch>
            </blockquote>
          </div>
        </div>
      </div>
    </Router>
  );
}
