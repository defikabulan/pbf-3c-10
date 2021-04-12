import React, { Component } from "react";

import { Link, Route, BrowserRouter as Router, Switch } from "react-router-dom";

import Home from "./pages/Home";
import Company from "./pages/Company";
import Services from "./pages/Services";
import Contact from "./pages/Contact";

class App extends Component {
  Navbar() {
    return (
      <div className="tm-site-header">
        <div className="row">
          <div className="col-12 tm-site-header-col">
            <div className="tm-site-header-left">
              <i class="far fa-2x fa-eye tm-site-icon"></i>
              <h1 class="tm-site-name">New Vision</h1>
            </div>
            <div className="tm-site-header-right tm-menu-container-outer">
              <nav className="navbar navbar-expand-lg">
                <button
                  class="navbar-toggler toggler-example"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent1"
                  aria-controls="navbarSupportedContent1"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span class="dark-blue-text">
                    <i class="fas fa-bars fa-1x"></i>
                  </span>
                </button>

                <div
                  className="collapse navbar-collapse tm-nav"
                  id="navbarSupportedContent1"
                >
                  <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                      <Link className="nav-link tm-nav-link" to="/">
                        Home
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link tm-nav-link" to="/company">
                        Our Company
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link tm-nav-link" to="/services">
                        Services
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link tm-nav-link" to="/contact">
                        Contact
                      </Link>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </div>
    );
  }

  render() {
    return (
      <Router>
        <div className="container-fluid">
          {this.Navbar()}
          <div className="row">
            <div className="col-12">
              <div class="tm-main-bg"></div>
              <Switch>
                <Route exact path="/">
                  <Home />
                </Route>
                <Route path="/company">
                  <Company />
                </Route>
                <Route path="/services">
                  <Services />
                </Route>
                <Route path="/contact">
                  <Contact />
                </Route>
              </Switch>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
