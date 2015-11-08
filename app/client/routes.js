import React from 'react';
import { Route, Router } from 'react-router';
import Hello from 'hello-cmp';
import Shell from './shell'

const routes = (
        <Router>
            <Route component={ Shell }>
                <Route component={ Hello } path="/" />
            </Route>
        </Router>);

export default routes;
