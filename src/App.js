import logo from './logo.svg';
import './App.css';
import SearchAppBar from './components/LGSearchAppBar';
import Defaultpage from './components/LGDefaultpage';

function App() {
  return (
    <div className="App">
      <SearchAppBar></SearchAppBar>
      <Defaultpage></Defaultpage>
    </div>
  );
}

export default App;
