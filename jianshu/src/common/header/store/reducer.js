import * as constants from './constants'
import {
  fromJS
} from 'immutable'
// state.header
const defaultState = fromJS({
  focused: false
})
// reducer必须是一个纯函数 
export default (state = defaultState, action) => {
  if (action.type === constants.SEARCH_FOCUS) {
    return state.set('focused',true)
  }
  if (action.type === constants.SEARCH_BLUR) {
    return state.set('focused', false)
  }
  if (action.type === constants.CHANGE_LIST){
    console.log(1);
    
    return state;
  }
  return state;
}