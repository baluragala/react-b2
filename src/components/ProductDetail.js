import React, { Component } from 'react'

class ProductDetail extends Component {

    constructor(props){
        super(props);
        this.revealOffers = this.revealOffers.bind(this);
    }

    revealOffers(){
        let {match,history} = this.props;
        history.push(`/product-home/products/${match.params['productId']}/offers`);
    }

    render () {
        return (
            <div>
                <h1>ProductDetail</h1>
                <h3>{this.props.match.params['productId']}</h3>
                <button onClick={this.revealOffers}>Show Offers</button>
            </div>
        )
    }
}

export default ProductDetail