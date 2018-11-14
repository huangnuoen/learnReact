import {
	takeEvery
} from "redux-saga/effects";
import {
	GET_INIT_LIST
} from "./actionTypes";

function getInitList() {
	console.log(11);

	// yield console.log('abc');

}

function* todoSagas() {
	// 捕捉每一个派发的action
	yield takeEvery(GET_INIT_LIST, getInitList);
}

export default todoSagas;
