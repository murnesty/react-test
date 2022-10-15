import logo from './logo.svg';
import './App.css';

function App() {
  // fetch('https://cors-anywhere.herokuapp.com/https://www.dm5.com/rss-world-trigger/')
  //  .then(response => response.text())
  //  .then(data => console.log(data));

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
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
