import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import greetingsReducer from './greetings/greetings';

const reducer = combineReducers({
  greeting: greetingsReducer,
});

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunk)),
);
export default store;
