import React, { Component } from 'react'

class Offer extends Component {
    render () {
        return (
            <div>
                <h1>Offer</h1>
                <button onClick={()=> this.props.history.go(-3)}>Back</button>
            </div>
        )
    }
}

export default Offer