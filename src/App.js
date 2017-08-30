import React from 'react';
import logo from './logo.svg';
import './App.css';
// import Button from './Button';
// import Game from './Game';
// import FontAwesome from 'react-fontawesome';


const Header = (props) => {
  return (
    <div>
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Welcome to React</h2>
      </div>
    </div>
  )
}
// const Result = (props) => {
//   return (
//     <div>{props.counter}</div>
//   )
// }
// let data = [
//   {
//     name: "dina",
//     userImg: "https://avatars1.githubusercontent.com/u/14866965?v=4&u=de5ccc4f058516001c173db0b31b3f3d39213239&s=400"
//   },
//   {
//     name: "hachima",
//     userImg: "https://avatars1.githubusercontent.com/u/14866965?v=4&u=de5ccc4f058516001c173db0b31b3f3d39213239&s=400"
//   }
// ]
// const Card = (props) => {
//   return (
//     <div style={{ margin: '1em' }}>
//       <div>{props.name}</div>
//       <img width="75px" src={props.userImg} />
//     </div>
//   )
// }
// const CardList = (props) => {
//   return (
//     <div>
//       {props.cards.map(card => <Card {...card} />)}
//     </div>
//   )
// }
class App extends React.Component {
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
        {/* <Game /> */}
      </div>
    );
  }
}

export default App;