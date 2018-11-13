// import { takeEvery } from "redux-saga/effects";
// import { GET_INIT_LIST } from "./actionTypes";

// function getInitList() {
//   console.log(11);
  
//   // yield console.log('abc');
  
// }
// function* todoSagas() {
//   // 捕捉每一个派发的action
//   yield takeEvery(GET_INIT_LIST, getInitList);
// }

// export default todoSagas;


import { takeEvery, put } from "redux-saga/effects";
import { GET_INIT_LIST } from "./actionTypes";
import { initListAction } from "./actionCreators";
import axios from "axios";

function* getInitList() {
  try {
    const res = yield axios.get("/list.json");
    const action = initListAction(res.data);
    yield put(action);
  } catch (e) {
    console.log("list.json网络请求失败");
  }
}

// generator 函数
function* mySaga() {
  yield takeEvery(GET_INIT_LIST, getInitList);
}

export default mySaga;