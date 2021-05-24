import './App.css';
import Buttons from './components/Buttons';
import DisplayViewer from './components/DisplayViewer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Counter - Redux</h1>
        <DisplayViewer/>
        <Buttons/>
      </header>
    </div>
  );
}

export default App;
