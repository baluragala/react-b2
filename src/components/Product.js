import React, { Component } from 'react'
import {Link} from 'react-router-dom';

class Product extends Component {
    render () {
        return (
            <div style={{margin:20, borderWidth:1, borderColor:'green',  borderStyle:'solid', padding:5}}>
                <h2>{this.props.product.title}</h2>
                <h3>{this.props.product.price}</h3>
            </div>
        )
    }
}

export default Product