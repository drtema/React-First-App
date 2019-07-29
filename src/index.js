import React from 'react';
import ReactDOM from 'react-dom';

// import * as serviceWorker from './serviceWorker';

import './styles/index.scss';


import Articles from './apps/articles';
// import App from './apps/myApp';
import PureApp from './apps/myPureApp';


//---------------------------------------------------------
// Раскоментировать для подключения react-perf-devtool
//
//let {registerObserver} = require('react-perf-devtool');
//registerObserver();
//---------------------------------------------------------


    function Main() {
        return (
            <>
                <Articles />
                {/*<App />*/}
                <PureApp />
            </>
        )
    }

ReactDOM.render(<Main />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

// serviceWorker.unregister();

