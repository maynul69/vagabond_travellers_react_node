
import { BrowserRouter, Switch, Route } from "react-router-dom";
import './App.css';
import AddPackage from "./Components/AddPackage/AddPackage";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import ManageOrders from "./Components/ManageOrders/ManageOrders";
import MyBookings from "./Components/MyBookings/MyBookings";
import PlaceOrder from "./Components/PlaceOrder/PlaceOrder";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";
import Footer from "./Components/Shared/Footer/Footer";
import Header from "./Components/Shared/Header/Header";
import AuthProvider from "./contexts/AuthProvider";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>

            <Route path="/home">
              <Home></Home>
            </Route>
            <PrivateRoute path="/placeorder/:id">
              <PlaceOrder></PlaceOrder>
            </PrivateRoute>
            <PrivateRoute path="/addpackage">
              <AddPackage></AddPackage>
            </PrivateRoute>
            <PrivateRoute path="/mybookings">
              <MyBookings></MyBookings>
            </PrivateRoute>
            <PrivateRoute path="/mngordrs">
              <ManageOrders></ManageOrders>
            </PrivateRoute>
            <Route path="/login">
              <Login></Login>
            </Route>

            <Route exact path="*"></Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
