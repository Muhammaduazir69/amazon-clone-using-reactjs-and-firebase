import './App.css';
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Login from './Login';
import { auth } from './firebase';
import { useEffect } from 'react';
import { useStateValue } from './StateProvider';

function App() {

  const [ {}, dispatch ] = useStateValue();

  useEffect(() => {

    auth.onAuthStateChanged(authUser => {
      console.log("THE USER IS >>> ", authUser)
      if(authUser) {
        //the user is logged in
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      }
      else {
        //the user is logged out
        dispatch({
          type: 'SET_USER',
          user: null,
        })
      }
    })
  }, [])
  return (
    <Router>
      <div className="app">
      <Header />
        <Switch>

          <Route path='/login'>
            <Login />
          </Route>
          <Route path="/checkout">
            <Checkout />
          </Route>

          <Route path="/">          
            <Home />          
          </Route>
          
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;
