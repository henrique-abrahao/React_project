import './index.css';
import React from 'react'
import ReactDOM from 'react-dom'
import {  createStore, compose, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'


import App from './main/App'
import rootReducer from './reducers/combineReducers'
import thunk from 'redux-thunk';


const store = createStore(rootReducer,compose(applyMiddleware(thunk)))
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
, document.getElementById('root'))
