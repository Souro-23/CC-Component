import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
// import { Provider } from 'react-redux';
// import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
// import thunk from 'redux-thunk';
// import loginAuthReducer from './store/reducers/auth';

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const composeEnhancers = (process.env.NODE_ENV !== "production" &&
//     typeof window !== "undefined" &&
//     window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_) ||
//   compose;


// const rootReducer = combineReducers({
//     auth: loginAuthReducer
// });

// if (process.env.NODE_ENV !== "development")
//     console.log = () => {};

// const middlewares =[thunk];

// if(process.env.NODE_ENV ==='development'){
//     middlewares.push(logger);
// }



// const store = createStore(rootReducer, composeEnhancers(
//     applyMiddleware(...middlewares)
// ));

// export default store 

ReactDOM.render(
// {/*<Provider store={store}>*/}
	  <React.StrictMode>
	    <App />
	  </React.StrictMode>
//  {/* </Provider>*/ },
,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
