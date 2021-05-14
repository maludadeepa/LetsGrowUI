import './App.scss';
import SearchAppBar from './components/Common/LGSearchAppBar';
import Defaultpage from './components/Common/LGDefaultpage';

function App() {
  return (
    <div className="App">
      <SearchAppBar></SearchAppBar>
      <Defaultpage></Defaultpage>
    </div>
  );
}

export default App;
