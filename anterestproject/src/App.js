import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import logoanterest from './logoanterest.jpeg';
import Login from './Pages/Login';
import Register from './Pages/Register';
import {BrowserRouter} from 'react-router-dom';
import { Switch } from 'react-router-dom'




function App() {
  return (
    <div>
    <header className="App-header">
            <img src={logoanterest} className="App-logo" alt="logo" />

            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
      <Router>
      <Switch>

      <Route path='/Login'component={Login}/>
      <Route path='/Register'component={Register}/>

      </Switch>
      </Router>
    </div>
  );
}

export default App;
