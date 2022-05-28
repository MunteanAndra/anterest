import {BrowserRouter as Router, Routes, Route, Redirect} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import logoanterest from './logoanterest.jpeg';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Photos from './Pages/Photos';
import {BrowserRouter} from 'react-router-dom';
import {Link} from 'react-router-dom';
import { Switch } from 'react-router-dom'
import Navbar from "./Components/Navbar"
import Footer from './Components/Footer';


function App() {
  return (
    <div>
    <Navbar />
    <header className="App-header">
            <img src={logoanterest} className="App-logo" alt="logo" />

            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Welcome to ANTEREST!
            </a>

            <ul className="Options">
            <li><a href="/Login">Login</a></li>
            <text>or</text>
            <li><a href="/Register">Register</a></li>
            <li><a href="/Photos">Photos</a></li>
            <li><a href="/">Uploads</a></li>
            <li><a href="/">Favourites</a></li>
            </ul>

          </header>

      <Router>
         <Footer />
      <Switch>
      <Route path='/Photos'component={Photos}/>
      <Route path='/Register'component={Register}/>
      <Route path='/Login'component={Login}/>
      </Switch>
      </Router>
    </div>
  );
}

export default App;

