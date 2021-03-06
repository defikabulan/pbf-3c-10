import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import ProtectedRoute from "./routes/ProtectedRoute";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";

function Root(props) {
  const { isAuthenticated, isVerifying } = props;
  return (
    <Switch>
      <ProtectedRoute
        exact
        path="/"
        component={Home}
        isAuthenticated={isAuthenticated}
        isVerifying={isVerifying}
      />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
    </Switch>
  );
}

function mapStateToProps(state) {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    isVerifying: state.auth.isVerifying,
  };
}

export default connect(mapStateToProps)(Root);
