import React from 'react';
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'
import { createStore, applyMiddleware} from 'redux'
import helloApp from './reducers'
import Login from 'login-cmp';

const loggerMiddleware = createLogger();
const createStoreWithMiddleware = applyMiddleware(
        thunkMiddleware,
        loggerMiddleware
)(createStore);

const store = createStoreWithMiddleware(helloApp);

export default function Shell(props) {
  return (
    <Provider store={ store }>
        <div>
            <Login /> 
            {props.children}
        </div>
    </Provider>
  );
}
