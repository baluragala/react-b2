import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter, HashRouter} from 'react-router-dom';
import {Provider} from "react-redux";
import {createStore} from "redux";
import reducer from './reducers';

const store = createStore(reducer);

ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('app'));
registerServiceWorker();


/*
    redux
    1. plan actions
    2. plan reducers
    3. create store

        store
    ||
    Proivder
    ||
        App

    react
        App
            Products
 */