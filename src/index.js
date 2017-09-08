import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Game from './Game';
import registerServiceWorker from './registerServiceWorker';
import * as code from 'voucher-code-generator';


let mycode = code.generate({
    length: 5,
})
console.log(mycode);
ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Game />, document.getElementById('game'));
registerServiceWorker();
