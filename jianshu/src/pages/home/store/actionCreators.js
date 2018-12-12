import * as constants from "./constants";
import axios from "axios";
import {
  fromJS
} from "immutable";

const changeHomeData = (result) => ({
  type: constants.CHANGE_HOME_DATA,
  topicList: result.topicList,
  recommendList: result.recommendList,
  articleList: result.articleList
})
const addHomeList = (list,page) => ({
  type: constants.ADD_HOME_LIST,
  list:fromJS(list),
  page: page+1
})

export const toggleTopShow = (showScroll) => ({
  type: constants.TOOGLE_TOP_SHOW,
  showScroll
})

export const getMoreList = (page) => {
  return (dispatch) => {
    axios.get("/api/homelist.json?page=" + page ).then(res => {
      const result = res.data.data.list;
      dispatch(addHomeList(result,page));
    });
  }
}

export const getHomeInfo = () => {
  return (dispatch) => {
    axios.get("/api/home.json").then(res => {
      const result = res.data.data;
      dispatch(changeHomeData(result));
    });
  }
}