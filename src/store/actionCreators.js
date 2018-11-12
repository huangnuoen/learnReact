import {
  CHANGE_INPUT_VALUE,
  ADD_TODO_ITEM,
  DELETE_TODO_ITEM,
  INIT_LIST
} from "./actionTypes";
import axios from "axios";
export const getInputChangeAction = value => ({
  type: CHANGE_INPUT_VALUE,
  value
});
export const getAddItemAction = () => ({
  type: ADD_TODO_ITEM
});
export const getDeleteItemAction = index => ({
  type: DELETE_TODO_ITEM,
  index
});
export const initListAction = data => ({
  type: INIT_LIST,
  data
});
// 使用中间件后，action的返回值可以是一个函数,参数是dispatch,可以实现异步获取数据 
export const getTodoList = data => {
  return (dispatch) => {
    axios.get("api/list").then(res => {
      console.log(res);      
      const action = initListAction(res.data);
      dispatch(action);
    });
  };
};
