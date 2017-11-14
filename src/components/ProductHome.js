import React, {Component} from 'react'
import {NavLink, Route, Switch} from 'react-router-dom'
import ProductDetail from './ProductDetail'
import Products from './Products'
import Offer from './Offer'

class ProductHome extends Component {
    render() {
        return (
            <div>
                <h1>ProductHome</h1>
                <nav>
                    <li><NavLink to="/product-home/products" activeStyle={{backgroundColor: 'orangered'}}
                                 activeClassName="active">Products</NavLink></li>
                </nav>
                <Switch>
                    <Route  path="/product-home/products/:productId/offers" component={Offer}/>
                    <Route  path="/product-home/products/:productId" component={ProductDetail}/>
                    <Route  path="/product-home/products" component={props => <Products {...props} products={[]}/>} />
                </Switch>
            </div>
        )
    }
}


export default ProductHome