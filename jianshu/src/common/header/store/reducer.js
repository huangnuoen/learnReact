import * as constants from "./constants";
import { fromJS } from "immutable";
// state.header
const defaultState = fromJS({
  focused: false,
  mouseIn: false,
  list: [],
  page: 1,
  totalPage: 1
});
// reducer必须是一个纯函数
export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.SEARCH_FOCUS:
      return state.set("focused", true);
      break;

    case constants.CHANGE_LIST:
      return state.merge({
        list: action.data,
        totalPage:action.totalPage
      })
      // return state.set("list", action.data).set("totalPage", action.totalPage);
      break;

    case constants.SEARCH_BLUR:
      return state.set("focused", false);
      break;

    case constants.MOUSE_ENTER:
      return state.set("mouseIn", true);

    case constants.MOUSE_LEAVE:
      return state.set("mouseIn", false);

    case constants.CHANGE_PAGE:
      return state.set("page",action.page );

    default:
      return state;
      break;
  }
};
