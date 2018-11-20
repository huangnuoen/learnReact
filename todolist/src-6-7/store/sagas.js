import { takeEvery, put } from "redux-saga/effects";
import { GET_INIT_LIST } from "./actionTypes";
import axios from "axios";

import { initListAction } from "./actionCreators";

function* getInitList() {
  try {
    const res = yield axios.get("/list1.json");
    const action = initListAction(res.data);
    yield put(action);
  } catch (e) {
    console.log('请求失败');
    
  }
}

function* todoSagas() {
  // 捕捉每一个派发的action
  yield takeEvery(GET_INIT_LIST, getInitList);
}

export default todoSagas;
