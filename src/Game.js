import React from 'react';
import FontAwesome from 'react-fontawesome';
import './Game.css';
import _ from 'lodash';

const Stars = (props) => {
    const numberOfStars = 1 + Math.floor(Math.random() * 9);
    let stars = [];
    for (let i = 0; i < numberOfStars; i++) {
        stars.push(<i key={i} className="fa fa-star"></i>);
    }
    return (
        <div className="col-xs-5">
            {stars}
        </div>
    )
}

const Button = (props) => {
    return (
        <div className="col-xs-2">
            <button>=</button>
        </div>
    )
}
const Answers = (props) => {
    return (
        <div className="col-xs-5">
            {props.selectedNumbers.map((number, i) =>
                <span className="numbers" key={i}>{number}</span>
            )}
        </div>
    )
}
const Numbers = (props) => {
    
    return (
        <div className="card text-center">
            <div>
                {
                    Numbers.list.map((number, i) =>
                        <span className="numbers"+ {numberClassName(number)} key={i}>{number}</span>)
                }
            </div>
        </div>
    )
}
Numbers.list = _.range(1, 10);
class Game extends React.Component {
    state = {
        selectedNumbers: [2, 4],
    }
    render() {
        return (
            <div className="container">
                <h3 className="game-title">Play Nine</h3>
                <hr />
                <div className="row">
                    <Stars />
                    <Button />
                    <Answers selectedNumbers={this.state.selectedNumbers} />

                </div>
                <br />
                <Numbers />
            </div>
        )
    }
}

export default Game;