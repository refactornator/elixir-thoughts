import { combineReducers } from 'redux';
import thoughts from './thoughts';
import category from './category';
import thought from './thought';

export default combineReducers({
  thoughts,
  category,
  thought
});
