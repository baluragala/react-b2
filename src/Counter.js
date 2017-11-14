import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Counter extends Component {

    static propTypes = {
        startWith : PropTypes.number.isRequired
    }

    static defaultProps = {
        startWith:0
    }

    constructor(props) {
        console.log('constructor')
        super(props);
        console.log(props);
        this.state = { counter: props.startWith, cars:['car1']};
        this.inc = this.inc.bind(this);
        this.dec = this.dec.bind(this);
        this.incOrDecClicked = this.incOrDecClicked.bind(this);
    }

    componentWillMount(){
        console.log('componentWillMount')
    }

    componentDidMount(){
        console.log('componentDidMount')
    }

    componentWillReceiveProps(nextProps){
        console.log('componentWillReceiveProps')
        this.setState( { counter: nextProps.startWith})
    }

    shouldComponentUpdate(){
        console.log('componentShouldUpdate')
        return true;
    }


    componentWillUpdate(){
        console.log('componentWillUpdate')
    }

    componentDidUpdate(){
        console.log('componentDidUpdate')
    }

    componentWillUnmount(){
        console.log('componentWillUnmount')
    }

    inc() {
        let currentCounter = this.state.counter;
        currentCounter++;
        this.setState({ counter: currentCounter,cars:null });
        this.incOrDecClicked(this.props.cid)
       
    }

    dec() {
        let currentCounter = this.state.counter;
        currentCounter--;
        this.setState({ counter: currentCounter });
        this.incOrDecClicked(this.props.cid)
    }


    incOrDecClicked(){
        this.props.counterClick(this.props.cid)
    }

    render() {
        console.log('render')
        return <div>
            <button onClick={this.inc}>INC</button>
            {this.state.counter}
            <button onClick={this.dec}>DEC</button>
        </div>
    }
}

export default Counter;