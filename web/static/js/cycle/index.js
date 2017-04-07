import * as actions from '../actions';
import * as ActionTypes from '../ActionTypes';

import { combineCycles } from 'redux-cycles';
import xs from 'xstream';

export function fetchThoughts(sources) {
  const thoughts$ = sources.ACTION.filter(
    action => action.type === ActionTypes.REQUESTED_THOUGHTS
  );

  const request$ = thoughts$.map(() => ({
    url: '/thoughts?sort=creationTime,desc',
    category: 'thoughts'
  }));

  const response$ = sources.HTTP
    .select('thoughts')
    .flatten()
    .map(res => res.body)
    .map(actions.receiveThoughts);

  return {
    ACTION: response$,
    HTTP: request$
  };
}

export function createThought(sources) {
  const thought$ = sources.ACTION
    .filter(action => action.type === ActionTypes.CREATE_THOUGHT)
    .map(action => action.payload);

  const request$ = thought$.map(newThought => ({
    url: '/thoughts',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    send: newThought,
    category: 'create-thought'
  }));

  const response$ = sources.HTTP
    .select('create-thought')
    .flatten()
    .map(res => res.body)
    .map(actions.successfullyCreatedThought);

  return {
    ACTION: response$,
    HTTP: request$
  };
}

export function forgetThought(sources) {
  const thought$ = sources.ACTION
    .filter(action => action.type === ActionTypes.FORGET_THOUGHT)
    .map(action => action.payload);

  const request$ = thought$.map(id => ({
    url: `/thoughts/${id}`,
    method: 'DELETE',
    category: 'delete-thought'
  }));

  const response$ = sources.HTTP.select('delete-thought').flatten();

  const action$ = xs
    .combine(response$, thought$)
    .map(arr => actions.forgotThought(arr[1]));

  return {
    ACTION: action$,
    HTTP: request$
  };
}

export default combineCycles(fetchThoughts, createThought, forgetThought);
