import React from 'react';

export default function HelloMessage(props) {
  if (!process.pid) require('./styles.css');
  return (<div>Hello {props.name}</div>);
}
