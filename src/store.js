import { createStore, applyMiddleware, compose } from 'redux'
import { createEpicMiddleware } from 'redux-observable'
import rootReducers from './reducers';
import rootEpics from './epics';

const epicMiddleware = createEpicMiddleware(rootEpics);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const enhancers = [
    applyMiddleware(
      epicMiddleware,
    ),
  ];
const store = createStore(rootReducers, {}, composeEnhancers(...enhancers));

export default store