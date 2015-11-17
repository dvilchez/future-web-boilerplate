import React from 'react';
import { connect } from 'react-redux'

function helloMessage(props) {
  if (!process.pid) require('./styles.css');
  const { dispatch, user} = props;

  return (<div>Hello {user}</div>);
}

function select(state) {
  return {
    user: state.get('user')
  }
}

export default connect(select)(helloMessage)
