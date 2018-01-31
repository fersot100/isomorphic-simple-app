// Startup point for client side application
import React from 'react';
import ReactDOM from 'react-dom';
import Home from './components/Home';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';
const app = (
    <BrowserRouter>
        <Routes />
    </BrowserRouter>
)
ReactDOM.hydrate(app, document.querySelector('#root'));