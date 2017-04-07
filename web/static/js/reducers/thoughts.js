import * as ActionTypes from '../ActionTypes';

export default function thoughts(state = [], action) {
  switch (action.type) {
    case ActionTypes.RECEIVED_THOUGHTS:
      return action.payload;
    case ActionTypes.SUCCESSFULLY_CREATED_THOUGHT:
      return [action.payload, ...state];
    case ActionTypes.FORGOT_THOUGHT:
      return state.filter(thought => thought.id !== action.payload);
    default:
      return state;
  }
}
