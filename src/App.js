import React from "react";
import HomePage from "./pages/homepage/homepage";
import HatPage from "./pages/hats/hats";
import {Switch,Route} from "react-router-dom";

function App() {
  return (
    <Switch>
      <Route exact path="/"component={HomePage}/>
      <Route  path="/hats"component={HatPage}/>

    </Switch>
  );
}

export default App;
