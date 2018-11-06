import { createStore } from "redux";
import reducer from "./reducer";
// store必须是唯一的
// 只有store能改变自己，reducer不能改变store内容
// reducer必须是纯函数（给固定的输入，就一定会有固定的输入，而且不能有任何副作用）
const store = createStore(
  reducer /* preloadedState, */,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
