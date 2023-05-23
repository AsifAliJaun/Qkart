import Register from "./components/Register";
import ipConfig from "./ipConfig.json";
import Login from "./components/Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Products from "./components/Products";
import Checkout from "./components/Checkout";
import Thanks from "./components/Thanks";

export const config = {
  endpoint: `https://qkart-frontend-g3r7.onrender.com`,
};


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/register">
            <Register />
             </Route>
             <Route exact path="/checkout">
          <Checkout />
        </Route>
        <Route exact path="/thanks">
          <Thanks />
        </Route>
          <Route exact path="/">
            <Products />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
