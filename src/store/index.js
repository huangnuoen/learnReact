import { createStore, applyMiddleware, compose } from "redux";
import reducer from "./reducer";
import thunk from "redux-thunk"; // redux中间件

// store必须是唯一的
// 只有store能改变自己，reducer不能改变store内容
// reducer必须是纯函数（给固定的输入，就一定会有固定的输入，而且不能有任何副作用）
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
  : compose;
const enhancer=composeEnhancers(
  applyMiddleware(thunk)
)
const store = createStore(
  reducer /* preloadedState, */,
  enhancer
  // applyMiddleware(thunk)
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
