import * as ActionTypes from '../ActionTypes';

import LocalStorage from '../utilities/local_storage';

export default function category(
  state = LocalStorage.getItem('thought') || '',
  action
) {
  switch (action.type) {
    case ActionTypes.CHANGE_THOUGHT:
      LocalStorage.setItem('thought', action.payload);
      return action.payload;
    case ActionTypes.SUCCESSFULLY_CREATED_THOUGHT:
      LocalStorage.removeItem('thought');
      return '';
    default:
      return state;
  }
}
