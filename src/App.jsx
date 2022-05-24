import React from "react";
import Topbar from "./components/Topbar/Topbar";
import Sidebar from "./components/Sidebar/Sidebar";
import "./App.css";
import Home from "./Pages/Home/Home";
import { BrowserRouter as Router, Switch, Route,HashRouter,Redirect} from "react-router-dom";
import UserList from "./Pages/UserList/UserList";
import User from "./Pages/User/User";
import NewUser from "./Pages/NewUser/NewUser";
import ProductList from "./Pages/ProductList/ProductList";
import Product from "./Pages/Product/Product";
import NewProduct from "./Pages/Home/NewProduct/NewProduct";

import Login from "./Pages/Login/Login"
import Transaction from "./Pages/Transaction/Transaction";
const App = () => {
  return (
  
    <Router>
      {/* <Switch> */}
       {/* <Route exact path="/">
           <Login/>
           </Route>  */}
         
     <Topbar />
     
      <div className="container">
      <Sidebar />
      
      <Switch>
        <Route exact path="/">
        
          <Home />
          </Route>
          
          <Route path="/users">
            <UserList />
          </Route>
          <Route path="/user/:userId">
            <User />
          </Route>
          <Route path="/newUser">
            <NewUser />
          </Route>
          <Route path="/products">
            <ProductList />
          </Route>
          <Route path="/product/:productId">
            <Product />
          </Route>
          <Route path="/newproduct">
            <NewProduct />
          </Route>
          <Route path='/transaction'>
            <Transaction/>
          </Route>
          </Switch>
          </div>
          {/* </Switch> */}
          
         
           
    </Router>
   
  );
};

export default App;
