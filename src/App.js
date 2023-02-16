
import './App.css';
import Resizeable from './Resizeable';

function App() {
  return (
    <div className="App">
      <div className="one">
        <Resizeable id={1} />
        <Resizeable id={2} />
      </div>
      <div className="two">
        <Resizeable id={3} />
        <Resizeable id={4} />
      </div>


    </div>
  );
}

export default App;
