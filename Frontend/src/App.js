import React from "react";
import { BrowserRouter, Route, Switch} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import Consulting from "./Pages/Consulting";
import Contactus from "./Pages/Contactus";
import Design from "./Pages/Design";
import Development from "./Pages/Development";
import Marketing from "./Pages/Marketing";
import Products from "./Pages/Products";
import Services from "./Pages/Services";
import Signup from "./Pages/Signup";
import Admin from "./Pages/Admin";




import './App.css';

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar />
    <Switch>
    <Route path="/" exact component={Home}></Route>
          <Route path="/contactus" component={Contactus}></Route>
          <Route path="/products" component={Products}></Route>
          <Route path="/services" component={Services}></Route>
          <Route path="/signup" component={Signup}></Route>
          <Route path="/marketing" component={Marketing}></Route>
          <Route path="/development" component={Development}></Route>
          <Route path="/design" component={Design}></Route>
          <Route path="/consulting" component={Consulting}></Route>
          <Route path="/Admin" component={Admin}></Route>

    </Switch>
    </BrowserRouter>
    </>
   
  );
}

export default App;
