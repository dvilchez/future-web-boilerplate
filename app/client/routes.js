import React from 'react';
import { Route, Router } from 'react-router';
import Hello from 'hello-cmp';

const routes = (<Router><Route component={ Hello } path="/" /></Router>);

export default routes;
