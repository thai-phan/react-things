import React from 'react';
import ReactDOM from 'react-dom';
import './output/Styles/global.css';
import App from './containers/App/index';
import registerServiceWorker from './registerServiceWorker';
import MasterView from './containers/router'

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<MasterView />, document.getElementById('game'));
registerServiceWorker();
