// import * as constants from "./constants";
import {
  fromJS
} from "immutable";
// state.header
const defaultState = fromJS({
  topicList: [{
    id: 1,
    title: 'hot',
    imgUrl: 'https://upload-images.jianshu.io/upload_images/1704158-a2b96b25eba9c6b5.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
  }, {
    id: 2,
    title: 'hot',
    imgUrl: 'https://upload-images.jianshu.io/upload_images/11387038-87d1372898224ab9?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
  }],
  articleList: [{
    id: 1,
    title: 'hot',
    desc: 'https://upload-images.jianshu.io/upload_images/2321684-a165d504fa612dd0?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240',
    imgUrl: 'https://upload-images.jianshu.io/upload_images/2321684-a165d504fa612dd0?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240',
  }, {
    id: 2,
    title: 'hot',
    desc: 'https://upload-images.jianshu.io/upload_images/2321684-a165d504fa612dd0?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240',
    imgUrl: 'https://upload-images.jianshu.io/upload_images/14211055-be2ed5ee79057982.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240',
  }],
  recommendList: [{
    id: 1,
    imgUrl: "http://cdn2.jianshu.io/assets/web/banner-s-3-7123fd94750759acf7eca05b871e9d17.png"
  }, {
    id: 2,
    imgUrl: "http://cdn2.jianshu.io/assets/web/banner-s-5-4ba25cf5041931a0ed2062828b4064cb.png"
  }]
});
// reducer必须是一个纯函数
export default (state = defaultState, action) => {
  switch (action.type) {
    default:
      return state;
      break;
  }
};