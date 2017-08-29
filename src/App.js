import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './Button';

const Header = (props) => {
  return (
    <div>
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Welcome to React</h2>
      </div>
      <p className="App-intro">
        To get started, edit <code>src/App.js</code> and save to reload.
        </p>
    </div>
  )
}
const Result = (props) => {
  return (
    <div>{props.counter}</div>
  )
}
let data = [
  {
    name: "dina",
    userImg: "https://avatars1.githubusercontent.com/u/14866965?v=4&u=de5ccc4f058516001c173db0b31b3f3d39213239&s=400"
  },
  {
    name: "hachima",
    userImg: "https://avatars1.githubusercontent.com/u/14866965?v=4&u=de5ccc4f058516001c173db0b31b3f3d39213239&s=400"
  }
]
const Card = (props) => {
  return (
    <div style={{ margin: '1em' }}>
      <div>{props.name}</div>
      <img width="75px" src={props.userImg} />
    </div>
  )
}
const CardList = (props) => {
  return (
    <div>
      {props.cards.map(card => <Card {...card} />)}
    </div>
  )
}
class App extends Component {
  state = { counter: 0 };
  incrementCounter = (incrementValue) => {
    this.setState((prevState) => ({
      counter: prevState.counter + incrementValue
    }))
  }
  render() {
    return (
      <div className="App">
        <Header />
        <Button incrementValue={5} onClickFunction={this.incrementCounter} />
        <Button incrementValue={7} onClickFunction={this.incrementCounter} />
        <Button incrementValue={10} onClickFunction={this.incrementCounter} />
        <Result counter={this.state.counter} />
        <CardList cards={data} />
      </div>
    );
  }
}

export default App;