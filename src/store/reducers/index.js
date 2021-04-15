import {
  combineReducers
} from 'redux';
import
person
from './person';

const appReducers = combineReducers({
  person,
});

const rootReducer = (state, action) => {
  let reducers = appReducers(state, action);
  return reducers;
};

export default rootReducer;