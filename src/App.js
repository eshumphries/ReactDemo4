import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
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
    <button onClick={user.name}>This also works</button>
  )
}

export default App;
