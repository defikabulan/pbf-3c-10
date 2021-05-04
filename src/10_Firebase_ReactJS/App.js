import Komentar from "./components/Komentar";
import React, { useState } from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Header from "./components/Header";
import routes from "./components/routes";
import "./App.css";

/*class App extends React.Component {
  render() {
    return (
      <div>
        {/* <BlogPost /> }
        <Komentar />
      </div>
    );
  }
}*/

export const AuthContext = React.createContext(null);

function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);

  return (
    <AuthContext.Provider value={{ isLoggedIn, setLoggedIn }}>
      Is Logged In? {JSON.stringify(isLoggedIn)}
      <div className="App">
        <Router>
          <Header />
          <Switch>
            {routes.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                exact={route.exact}
                Component={route.main}
              />
            ))}
          </Switch>
        </Router>
      </div>
    </AuthContext.Provider>
  );
}

export default App;
