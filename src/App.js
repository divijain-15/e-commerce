import React from "react";
import HomePage from "./pages/homepage/homepage";
import {Switch,Route} from "react-router-dom";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header";
import SignInSignupPage from "./pages/sign-in-sign-up/sign-insign-up";

function App() {
  return (
    <div>
    <Header/>
    <Switch>
      <Route exact path="/"component={HomePage}/>
      <Route  path="/shop"component={ShopPage}/>
      <Route  path="/login"component={SignInSignupPage}/>


    </Switch>
    </div>
  );
}

export default App;
