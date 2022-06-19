import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router } from 'react-router-dom'
// import { createBrowserHistory } from "history";
// import { Router } from "react-router-dom";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.min.js';


// const history = createBrowserHistory();
// const rootElement = document.getElementById("root");


// ReactDOM.render(<Router history={history}>
//     <App />
//   </Router>
//   , document.getElementById('root'));

ReactDOM.render( <Router>
    <App />
</Router>, document.getElementById('root'));



registerServiceWorker();
