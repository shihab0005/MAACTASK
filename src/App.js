
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Components/Home/Home';
import Registration from './Components/Registration/Registration';
import Login from './Components/Login/Login';
import Dashboard from './Components/Dashboard/Dashboard';
import Context from './Components/Context/Context';
import { useState } from 'react';



function App() {
  const [userData, setUserData] = useState({});
  const [regionInfo, setRegionInfo] = useState({});
  return (
    <Context.Provider value={{ userData, setUserData, regionInfo, setRegionInfo }}>
      <BrowserRouter>

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/registration">
            <Registration />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>

        </Switch>


      </BrowserRouter>
    </Context.Provider>
  );
}

export default App;
