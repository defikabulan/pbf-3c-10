import logo from "./logo.svg";
import "./App.css";

function Kartu(props) {
  return (
    <h1>
      Halo, {props.nim} - {props.nama}
    </h1>
  );
}

function App() {
  return (
    <div>
      <Kartu nim="17562799" nama="Melati" />
      <Kartu nim="17255643" nama="Mawar" />
      <Kartu nim="17653408" nama="Lily" />
    </div>
  );
}

export default App;
