import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter, HashRouter} from 'react-router-dom';
import {Provider} from "react-redux";
import {applyMiddleware, createStore} from "redux";
import reducer from './reducers';
import createSagaMiddleware from 'redux-saga';
import {getProductWatcher, watchers} from "./sagas/index";
import {createLogger} from 'redux-logger'

let sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer, applyMiddleware(sagaMiddleware, createLogger()));
sagaMiddleware.run(watchers);

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