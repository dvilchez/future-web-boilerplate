import express from 'express';
import hello from './hello';
import { Router, Route, match, RoutingContext } from 'react-router';
import { renderToString } from 'react-dom/server';
import React from 'react';
import routes from '../client/routes';

const router = express.Router();

router.use('/api/hello', hello);
router.get('/', function (req, res) {
    match({ routes, location: req.url }, (error, redirectLocation, renderProps) => {
        if (error) {
          res.status(500).send(error.message)
        } else if (redirectLocation) {
          res.redirect(302, redirectLocation.pathname + redirectLocation.search)
        } else if (renderProps) {
          res.status(200).render('index', {content: renderToString(<RoutingContext {...renderProps} />)})
        } else {
          res.status(404).send('Not found')
        }
  });
});

export default router;
