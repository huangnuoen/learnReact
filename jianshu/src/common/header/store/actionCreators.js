import * as constants from "./constants";
import axios from "axios";
import { fromJS } from "immutable";
export const searchFocus = () => ({
  type: constants.SEARCH_FOCUS
});

export const searchBlur = () => ({
  type: constants.SEARCH_BLUR
});

const changeList = data => ({
  type: constants.CHANGE_LIST,
  data: fromJS(data),
  totalPage: Math.ceil(data.length / 10)
});

export const mouseEnter = () => ({
  type: constants.MOUSE_ENTER
});

export const mouseLeave = () => ({
  type: constants.MOUSE_LEAVE
});
export const changePage = (page) => ({
  type: constants.CHANGE_PAGE,
  page
});

// 使用thunk后 actions可以是一个函数
// 可以用来派发异步请求
export const getList = () => {
  return dispatch => {
    axios
      .get("api/getlist.json")
      .then(res => {
        const data = res.data;
        dispatch(changeList(data.data));
      })
      .catch(res => {
        console.log(res);
      });
  };
};
