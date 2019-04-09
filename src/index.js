import React from 'react';
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './reducers'
import App from './App';
import * as serviceWorker from './serviceWorker';

const persistedState = localStorage.getItem('tasks') ? JSON.parse(localStorage.getItem('tasks')) : {'tasks': []}
const store = createStore(rootReducer, persistedState);

store.subscribe(()=>{
  localStorage.setItem('tasks', JSON.stringify(store.getState()))
})

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();
