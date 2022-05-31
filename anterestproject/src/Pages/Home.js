import {BrowserRouter as Router, Routes, Route, Redirect} from 'react-router-dom';
import './Home.css';
//import logoanterest from '../logoanterest.jpeg';
import anterest from '../anterest.jpeg';

function Home() {
  return (
    <div className="home">

    <header className="logo">
            <img src={anterest} className="App-logo" alt="logo" />
          </header>
          <div className="animate">
    <div className="text1">Who do you call for curious ants?</div>
    <div className="text2">
      <span>ANTEREST</span>
    </div>
    </div>

    </div>
  );
}

export default Home;

