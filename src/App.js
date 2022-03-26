import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Base from './layouts/Base';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Base />
        
      </BrowserRouter>
    </div>
  );
}

export default App;
