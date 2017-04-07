import * as ActionTypes from '../ActionTypes';

import LocalStorage from '../utilities/local_storage';

export default function category(
  state = LocalStorage.getItem('category') || 'work',
  action
) {
  switch (action.type) {
    case ActionTypes.CHANGE_CATEGORY:
      LocalStorage.setItem('category', action.payload);
      return action.payload;
    default:
      return state;
  }
}
