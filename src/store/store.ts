import {rootReducer} from './rootReducer'
import {compose,createStore,applyMiddleware} from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './sagas';
import { TweetsState } from './ducks/tweets/contracts/state';
import { TagsState } from './ducks/tags/contracts/state';

declare global {
    interface Window {
      __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
  }

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const sagaMiddleware = createSagaMiddleware()

export interface RootState {
  tags: TagsState;
  tweets: TweetsState
}

export const store = createStore(rootReducer,composeEnhancers(applyMiddleware(sagaMiddleware)))

sagaMiddleware.run(rootSaga)

