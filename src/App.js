import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <div>
          <h1>This works</h1>
          <MyButton/>
        </div>
      </header>
    </div>
  );
}

function MyButton() {
  return (
    <button>Click me</button>
  )
}

export default App;
