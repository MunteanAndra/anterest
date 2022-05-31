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
import HamburgerMenu from './Pages/HamburgerMenu';
import SearchBar from './Components/SearchBar';

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

          </header>

      <Router>
      <HamburgerMenu />

      <Switch>
      <Route path='/Photos'component={Photos}/>
      <Route path='/Register'component={Register}/>
      <Route path='/Login'component={Login}/>
      </Switch>
      <Footer />
      </Router>
    </div>
  );
}

export default App;

