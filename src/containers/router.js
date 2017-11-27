import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

import Game from './Game/index';
import Validate from './Validate/index';
import Home from './Home/index';
import Topics from './Topic/index';
import TodoApp from './Todo/index';
import TodoSmall from './TodoSmall';
import ReduxSaga from './ReduxSaga';

const MasterView = () => (
  <Router>
    <div className="container">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/game">Game</Link></li>
        <li><Link to="/topic">Topics</Link></li>
        <li><Link to="/validate">Validate</Link></li>
        <li><Link to="/todo">To do App</Link></li>
        <li><Link to="/todosmall">App Small</Link></li>
        <li><Link to="/ReduxSaga">Redux Saga</Link></li>
      </ul>
      <hr />
      <Route exact path="/" component={Home} />
      <Route path="/game" component={Game} />
      <Route path="/topic" component={Topics} />
      <Route path="/validate" component={Validate} />
      <Route path="/todo" component={TodoApp} />
      <Route path="/todosmall" component={TodoSmall} />
      <Route path="/reduxsaga" component={ReduxSaga} />
    </div>
  </Router>
)

export default MasterView