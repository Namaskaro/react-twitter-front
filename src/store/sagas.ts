
import { all } from "redux-saga/effects";
import { tagsSaga } from "./ducks/tags/sagas";
import { tweetsSaga } from "./ducks/tweets/saga";

export default function* rootSaga() {
    yield all([
      tweetsSaga(),
      tagsSaga()
    ])
  }