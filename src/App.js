import logo from './logo.svg';
import './App.css';
import Test from './components/test.tsx'

function App() {
  return (
    <div className="App">
      <Test />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Salut tout monde
        </p>
      </header>
    </div>
  );
}

export default App;
