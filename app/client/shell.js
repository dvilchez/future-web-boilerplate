import React from 'react';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import helloApp from './reducers'

let store = createStore(helloApp);

export default function Shell(props) {
  return (
    <Provider store={ store }>
        {props.children}
    </Provider>
  );
}
