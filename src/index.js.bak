import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/index.css';

// import App from './App';
import App from './myApp';
import PureApp from './myPureApp'
import * as serviceWorker from './serviceWorker';


//
// var {registerObserver} = require('react-perf-devtool')
//
// // Simple, no?
// registerObserver()

    function Main() {
        return (
            <>
                <App />;
                <PureApp />
            </>
        )
    }

// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Main />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

serviceWorker.unregister();

