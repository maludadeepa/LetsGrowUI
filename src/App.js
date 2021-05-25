import './App.scss';
import React from 'react';
import setEnv from './service/constants'
import SearchAppBar from './components/Common/LGSearchAppBar';
import Defaultpage from './components/Common/LGDefaultpage';
import { AppContext , default_context } from './service/LGAppContext';


function App() {
  const [state, setstate] = React.useState(default_context);

  React.useEffect(() => {
    fetch(setEnv().api_url + "/auth/userDetail", { credentials: 'include' })
      .then(resp => resp.json())
      .then(resp => {
        console.log(resp)
        let tmpState = Object.assign({} ,state);
        if (resp.data.email) {
          tmpState.user_session.status = true;
          tmpState.user_session.user_image = resp.data.userImageLink;
          console.log("going to set state to " , tmpState);
          setstate(tmpState)
        }
      })
  }, []);

  return (
    <AppContext.Provider value={state}>
      <div className="App">
        <SearchAppBar></SearchAppBar>
        <Defaultpage></Defaultpage>
      </div>
    </AppContext.Provider>
  );
}

export default App;
