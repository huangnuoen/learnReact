import * as constants from "./constants";
import {
  fromJS
} from "immutable";
// state.header
const defaultState = fromJS({
  topicList: [],
  articleList: [],
  recommendList: [],
  articlePage: 1,
  showScroll: false
});
// reducer必须是一个纯函数
export default (state = defaultState, action) => {
  switch (action.type) {
    case constants.CHANGE_HOME_DATA:
      return state.merge({
        topicList: fromJS(action.topicList),
        articleList: fromJS(action.articleList),
        recommendList: fromJS(action.recommendList),
      })
    case constants.ADD_HOME_LIST:
      return state.merge({
        articlePage: action.page,
        articleList: state.get('articleList').concat(action.list)
      })
    case constants.TOOGLE_TOP_SHOW:
      return state.set('showScroll',action.showScroll)
    default:
      return state;
      break;
  }
};