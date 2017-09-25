import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import createSagaMiddleware from 'redux-saga';
import reducer from './reducers';

import Home from './components/home'

const sagaMiddleware = createSagaMiddleware();
const createStoreWithMiddleware = applyMiddleware(sagaMiddleware)(createStore)

const router = () => {
    return (
        <Router>
            <div>
                <Switch>
                    <Route part="/" component={Home} />
                </Switch>
            </div>
        </Router>
    );
}

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducer)}>
        {router()}
    </Provider>, document.getElementById('root'));
