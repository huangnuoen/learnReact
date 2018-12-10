import * as constants from './constants'
import axios from 'axios'
export const searchFocus = () => ({
  type: constants.SEARCH_FOCUS
})

export const searchBlur = () => ({
  type: constants.SEARCH_BLUR
})

const changeList = (data) => ({
  type: 'change_list',
  data
})

// 使用thunk后 actions可以是一个函数
// 可以用来派发异步请求
export const getList = () => {
  return (dispatch) => {
    axios.get('api/getlist.json').then(res => {
      const data = res.data;
      console.log(changeList(data));
      
      dispatch(changeList(data))
    }).catch(res => {
      console.log(res);

    })
  }
}