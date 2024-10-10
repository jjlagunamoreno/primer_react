import logo from './logo.svg';
import './App.css';

function App() {
  var estilo = {
    color: "red",
    backgroundcolor: "yellow",
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p style={estilo}>
          Edit <code>src/App.js</code> and HOLA MUNDO to reload.
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
