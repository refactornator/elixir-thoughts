import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './reducers';
import main from './cycle';
import { createCycleMiddleware } from 'redux-cycles';
import { run } from '@cycle/run';
import { makeHTTPDriver } from '@cycle/http';

export default function configureStore() {
  const cycleMiddleware = createCycleMiddleware();
  const { makeActionDriver, makeStateDriver } = cycleMiddleware;

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ||
    compose;
  const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(cycleMiddleware))
  );

  run(main, {
    ACTION: makeActionDriver(),
    STATE: makeStateDriver(),
    HTTP: makeHTTPDriver()
  });

  return store;
}
