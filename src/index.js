import 'babel-polyfill';
import 'whatwg-fetch';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Helmet } from "react-helmet";
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import { Route, HashRouter } from 'react-router-dom';
import allReducers from './reducers';
import routes from './routes';
import './styles/styles.css';

// Use redux-logger middleware for easier debugging
const store = createStore(allReducers, applyMiddleware(thunk, createLogger()));

// Helper function to create SEO friendly pages using HELMET
const renderRoute = (route, props) => {
  // Reset window scrolling
  window.scrollTo(0,0);
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{route.title}</title>
        <meta name="description" content={route.description}/>
        <meta name="keywords" content={route.keywords}/>
      </Helmet>
      <route.component routeParams={props.match.params}/>
    </div>
  );
};

const createRoutes = () => routes.map((route) => (
  <Route
    exact={route.path === '/'}
    key={route.path}
    path={route.path}
    component={(props) => renderRoute(route,props)}>
  </Route>
));

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <div className="main-container">{createRoutes()}</div>
    </HashRouter>
  </Provider>,
  document.getElementById('root')
);
