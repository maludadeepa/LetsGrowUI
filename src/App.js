import './App.scss';
import React from 'react';
import setEnv from './service/constants'
import SearchAppBar from './components/Common/LGSearchAppBar';
import Defaultpage from './components/Common/LGDefaultpage';
import { AppContext, default_context } from './service/LGAppContext';


function App() {
  const [state, setstate] = React.useState(default_context);

  React.useEffect(() => {
    fetch(setEnv().api_url + "/auth/userDetail", { credentials: 'include' })
      .then(resp => resp.json())
      .then(resp => {
        if (resp.data.email) {
          let tmpState = {
            user_session: {
              status: true,
              user_image: resp.data.userImageLink
            }
          }
          setstate(tmpState)
        }
      })
  }, []);

  return (
    <AppContext.Provider value={[state, setstate]}>
      <div className="App">
        <SearchAppBar></SearchAppBar>
        <Defaultpage></Defaultpage>
      </div>
    </AppContext.Provider>
  );
}

export default App;
