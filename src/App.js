

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Nav } from "./component/nav";


// page :::::::::::::::::


import { Mint } from "./component/pages/mint";
import { View } from "./component/pages/view";
import { Approve } from "./component/pages/approve";
import { Transfer } from "./component/pages/transfer";

function App() {
  return (
    <Router>
    <Nav></Nav>

    <Switch>

      <Route exact path='/'>
        <Mint></Mint>
      </Route>

      <Route exact path='/view'>
        <View></View>
      </Route>


      <Route exact path='/approve/:token_id' children={<Approve />}>
         
      </Route>

      <Route exact path='/transfer/:token_id' children={<Transfer />}>
         
      </Route>

     

      

     
      
    </Switch>

  </Router>
  );
}

export default App;
