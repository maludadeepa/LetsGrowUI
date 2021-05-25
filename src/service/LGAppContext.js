import React from 'react';


export const default_context = {
    "user_session": {
      "status": false,
      "user_name": "",
      "user_id": "",
      "user_image": ""
    }
  }
export  const AppContext = React.createContext(default_context);