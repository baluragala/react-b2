import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header'
import Counter from './Counter'
import Form from './Form';
import Form2 from './Form2';
import Home from './components/Home'
import Products from './components/Products'
import Company from './components/Company'
import Checkout from './components/Checkout'
import {Route, Switch} from 'react-router-dom'
import Nav from './components/Nav'
import ProductDetail from './components/ProductDetail'
import Offer from './components/Offer'
import ProductHome from './components/ProductHome'

class App extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <Nav/>
                <Switch>
                    <Route path="/home" component={Home}/>
                    <Route path="/company" component={Company}/>
                    <Route path="/product-home" component={ProductHome}/>
                    <Route path="/checkout" component={Checkout}/>
                    <Route component={() => <h2>Oops!!, we did not find what you are looking for...</h2>}/>
                </Switch>
            </div>
        )
    }
}

export default App;
