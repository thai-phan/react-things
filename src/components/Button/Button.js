import React, { Component } from 'react';
import './Global.css';

class Button extends Component {
    // state = { counter: 0 };
    // handleClick = () => {
    //     this.setState((prevState) => ({
    //         counter: prevState.counter + 1
    //     }))
    // }
    render() {
        return (
            <button onClick={() => this.props.onClickFunction(this.props.incrementValue)}>
                +{this.props.incrementValue}
            </button>
        )
    }
}

export default Button;