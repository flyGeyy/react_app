import React from 'react';
// import logo from './logo.svg';
// import './App.css';
import Login from './pages/login/login'
import {BrowserRouter,Switch,Route} from 'react-router-dom'

function App() {
  return (
   <BrowserRouter>
    <Switch>
      <Route path='/login' component={Login}/>
      
    </Switch>
   </BrowserRouter>
  );
}

export default App;
