import axios from 'axios'
import {  takeLatest,call, put } from 'redux-saga/effects'
import { setTweets, setTweetsLoadingState, TweetsActionsType } from './actionCreators'
import {TweetsApi} from '../../../services/api/tweetsApi'
import { LoadingState } from './contracts/state'

// eslint-disable-next-line require-yield
export function* fetchTweetsRequest() {
 try{
    const items = yield call(TweetsApi.fetchTweets)
    yield put(setTweets(items))
 }catch(error){
     yield put(setTweetsLoadingState(LoadingState.ERROR))
 }
  
}

// Our watcher Saga: spawn a new incrementAsync task on each INCREMENT_ASYNC
export function* tweetsSaga() {
  yield takeLatest(TweetsActionsType.FETCH_TWEETS, fetchTweetsRequest)
}