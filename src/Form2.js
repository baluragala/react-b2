import React, { Component } from 'react'

class Form2 extends Component {

    constructor() {
        super();
        this.state = { color: '' }
        this.handleChange = this.handleChange.bind(`this`);
        this.handleSubmit = this.handleSubmit.bind(this);

        setTimeout(()=>this.handleSubmit({preventDefault:()=>console.log('')}),3000);
    }

    handleChange(event) {
        this.setState({ color: event.target.value })
    }

    handleSubmit(event){
        console.log(this);
        event.preventDefault();
    }

    render() {
       

        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>Color Name:</label><input type="text" defaultValue="green" ref={input => this._color = input} />
                    </div>
                    <button type="submit">submit</button>
                </form>
            </div>
        )
    }
}

export default Form2