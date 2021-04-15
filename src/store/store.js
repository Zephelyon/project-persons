import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

const store = createStore(rootReducer,
  compose(
    applyMiddleware(thunk),
    applyMiddleware(logger),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);

export default store;