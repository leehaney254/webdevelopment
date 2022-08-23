//import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
//import Hello from './components/Hello';

function App() {
  return (
    <div className="App" >
      {/*Dynamic info is passed within the tag */}
      <Greet name='Bruce' hero='Superman' >
        <p>This is his definition.</p>
      </Greet>
      <Greet name='Diana' hero='Batwoman'>
        <button>Action</button>
      </Greet>
      <Greet name='Maggie' hero='Wonder girl' />
      <Welcome />
      {/* <Hello></Hello> */}
    </div>
  );
}

export default App;

