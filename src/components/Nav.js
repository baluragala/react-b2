import React, { Component } from 'react'
import {Link,NavLink} from 'react-router-dom'
import './Nav.css'

class Nav extends Component {
    render () {
        return (
            <nav>
                <ul>
                    <li><NavLink to="/home" activeStyle={ {backgroundColor:'orangered'} } activeClassName="active">Home</NavLink></li>
                    <li><NavLink to="/product-home" activeStyle={ {backgroundColor:'orangered'} } activeClassName="active">Products</NavLink></li>
                    <li><NavLink to="/company" activeStyle={ {backgroundColor:'orangered'} } activeClassName="active">Company</NavLink></li>
                    <li><NavLink to="/checkout" activeStyle={ {backgroundColor:'orangered'} } activeClassName="active">Checkout</NavLink></li>
                </ul>
            </nav>
        )
    }
}

export default Nav;