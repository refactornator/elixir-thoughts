import * as ActionTypes from '../ActionTypes';

export function requestThoughts() {
  return {
    type: ActionTypes.REQUESTED_THOUGHTS
  };
}

export function receiveThoughts(response) {
  return {
    type: ActionTypes.RECEIVED_THOUGHTS,
    payload: response._embedded.thoughts
  };
}

export function createThought(thought) {
  return {
    type: ActionTypes.CREATE_THOUGHT,
    payload: thought
  };
}

export function successfullyCreatedThought(thought) {
  return {
    type: ActionTypes.SUCCESSFULLY_CREATED_THOUGHT,
    payload: thought
  };
}

export function forgetThought(id) {
  return {
    type: ActionTypes.FORGET_THOUGHT,
    payload: id
  };
}

export function forgotThought(id) {
  return {
    type: ActionTypes.FORGOT_THOUGHT,
    payload: id
  };
}

export function changeCategory(newCategory) {
  return {
    type: ActionTypes.CHANGE_CATEGORY,
    payload: newCategory
  };
}

export function changeThought(newThought) {
  return {
    type: ActionTypes.CHANGE_THOUGHT,
    payload: newThought
  };
}
