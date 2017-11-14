import React, { Component } from 'react'

class Form extends Component {

    constructor() {
        super();
        this.state = { color: '' }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({ color: event.target.value })
    }
    render() {
        return (
            <div>
                <form>
                    <div>
                        <label>Color Name:</label><input type="text" value={this.state.color} onChange={this.handleChange} />
                    </div>
                    <div>
                        <select value={this.state.color} onChange={this.handleChange}>
                            <option value=""></option>
                            <option value="red">RED</option>
                            <option value="green">GREEN</option>
                            <option value="blue">BLUE</option>
                        </select>
                    </div>
                </form>
            </div>
        )
    }
}

export default Form