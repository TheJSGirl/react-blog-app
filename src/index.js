import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import {BrowserRouter, Route } from 'react-router-dom';
import postListComponent from './components/postListComponent'
import thunk from 'redux-thunk';
import promise from 'redux-promise';

import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    {/* <App /> */}
    <BrowserRouter>
      <div>
        <Route path= '/posts' component = {postListComponent}/>
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
