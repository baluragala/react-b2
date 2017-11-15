import React, {Component} from 'react'
import Product from './Product'

class Products extends Component {

    constructor(props) {
        super(props)
        /* this.state  = {products:[
             {id:1,title:'apple',price:20},
             {id:2,title:'banana',price:20},
             {id:3,title:'cherry',price:20}
         ]}*/
    }

    render() {
        return (
            <div style={{margin: 20}}>
                <h1>Products</h1>
                {this.props.products && this.props.products.map(p => <Product product={p}/>)}
            </div>
        )
    }
}

export default Products