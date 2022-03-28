import logo from './logo.svg';
import './App.css';
import logoanterest from './logoanterest.jpeg';



function App() {
  return (
    <div className="App">
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
    </div>
  );
}

export default App;
