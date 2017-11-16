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
import asyncComponent from './components/AsyncComponent';
import {getProductsActionCreator} from "./actionCreators/index";
import {connect} from "react-redux";

const AsyncProductHome = asyncComponent(() => import("./components/ProductHome"));

class App extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        console.log(this.props.data);
        return (
            <div>
                {/*<Nav/>
                <Switch>
                    <Route exact path="/home" component={Home}/>
                    <Route exact path="/company" component={Company}/>
                    <Route exact path="/product-home" component={AsyncProductHome}/>
                    <Route exact path="/checkout" component={Checkout}/>
                    <Route component={() => <h2>Oops!!, we did not find what you are looking for...</h2>}/>
                </Switch>*/}
                <button onClick={this.props.getProducts}>GET PRODUCTS</button>
                <button onClick={this.props.getPosts}>GET POSTS</button>
                <button onClick={this.props.getComments}>GET COMMENTS</button>
                {this.props.isLoading ? <p>Loading...</p> :
                    <Products products={this.props.products}/>
                }
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        products: state.products,
        isLoading: state.isLoading
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getProducts: () => dispatch(getProductsActionCreator()),
        getPosts: () => dispatch({type: 'GET_POSTS'}),
        getComments: () => dispatch(({type: 'GET_COMMENTS'}))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
