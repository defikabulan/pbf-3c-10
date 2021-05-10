// firebase
import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/auth";

// bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import { Spinner } from "react-bootstrap";

import { useContext, useState } from "react";
import { AuthContext } from "../App";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setErrors] = useState("");
  const [loading, setLoading] = useState("");

  const Auth = useContext(AuthContext);
  const handleForm = (e) => {
    e.preventDefault();
    setLoading(true);

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((res) => {
        if (res.user) Auth.setLoggedIn(true);
        setLoading(false);
      })
      .catch((e) => {
        setErrors(e.message);
        setLoading(false);
      });
  };

  const loginWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((res) => {
        console.log(res);
        Auth.setLoggedIn(true);
      });
  };

  const logout = () => {
    firebase.auth().signOut();
    Auth.setLoggedIn(false);
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={(e) => handleForm(e)}>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          name="email"
          type="email"
          placeholder="email"
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          name="password"
          type="password"
          placeholder="password"
        />
        <hr />
        {Auth.isLoggedIn ? (
          <div>
            <button className="logoutBtn" onClick={() => logout()}>
              Logout
            </button>
          </div>
        ) : (
          <div>
            <button
              className="googleBtn"
              style={{ marginRight: "2em" }}
              type="button"
              onClick={() => loginWithGoogle()}
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                alt="logo"
              />
              Login With Google
            </button>
            <button type="submit">
              {loading ? <Spinner animation="border" role="status" /> : "Login"}
            </button>
          </div>
        )}

        <span>{error}</span>
      </form>
    </div>
  );
}

export default Login;
