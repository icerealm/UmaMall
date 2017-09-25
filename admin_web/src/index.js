import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';

import createSagaMiddleware from 'redux-saga';
import {persistStore, autoRehydrate} from 'redux-persist';
import reducer from './reducers';

import {router} from './router';
import rootSaga from './saga';
import './styles/app.scss';


const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer, 
                          undefined, 
                          compose(
                              applyMiddleware(sagaMiddleware),
                              autoRehydrate() 
                            )
                        );
persistStore(store);
                        

ReactDOM.render(
    <Provider store={store}>
        {router()}
    </Provider>, 
    document.getElementById('root'));
sagaMiddleware.run(rootSaga);
