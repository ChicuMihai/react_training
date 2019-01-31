import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import { store } from './store';


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
//serviceWorker.register();










// store.dispatch({ type: "ADD", payload: 20 });
// store.dispatch({ type: "MULTIPLICATION", payload: 20 });
// store.dispatch({ type: "ADD", payload: 20 });
// store.dispatch({ type: "SUBTRACT", payload: 2 });
// store.dispatch({ type: "SET_NAME", payload: "Mihai" });
// store.dispatch({ type: "SET_AGE", payload: 21 });
// store.dispatch({ type: "ADD", payload: 33 });

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'));