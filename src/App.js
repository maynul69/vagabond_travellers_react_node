
import { BrowserRouter, Switch, Route } from "react-router-dom";
import './App.css';
import Home from "./Components/Home/Home";
import PlaceOrder from "./Components/PlaceOrder/PlaceOrder";
import Header from "./Components/Shared/Header/Header";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>

          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/placeorder">
            <PlaceOrder></PlaceOrder>
          </Route>

          <Route exact path="*">
            
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
