// Startup point for client side application
import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/Home';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Routes from './Routes';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';

const store = createStore(reducers, {}, applyMiddleware(thunk));
const app = (
    <Provider store={store}>
        <BrowserRouter>
            <Routes />
        </BrowserRouter>
    </Provider>
)
ReactDOM.hydrate(app, document.querySelector('#root'));