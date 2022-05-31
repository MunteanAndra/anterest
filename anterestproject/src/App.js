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
import Home from './Pages/Home';
function App() {
  return (
    <div>

    <Router>
      <Navbar />
      <HamburgerMenu />
      <Route path='/' exact component={Home}/>
      <Route  path='/Photos'exact component={Photos}/>
      <Route  path='/Register' exact component={Register}/>
      <Route  path='/Login' exact component={Login}/>
      <Footer />
    </Router>
    </div>
  );
}

export default App;

