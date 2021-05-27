import React, { useEffect } from 'react';
import { BrowserRouter , Route } from 'react-router-dom'
// import firebase from './Firebase/FirebaseConfig'
// import 'firebase/analytics';

import './App.css';

import CustomLayout from './containers/CustomLayout'
function App() {
  // useEffect(() => {
  //   firebase.analytics()
    
  // }, [])
  return (
  	<BrowserRouter>
    <div className="App">
        <Route  path="/" component={CustomLayout}/>  
    </div>
    </BrowserRouter>
  );
}

export default App;