import * as constants from './constants'

// state.header
const defaultState = {
  focused: false
}
// reducer必须是一个纯函数 
export default (state = defaultState,action) => {
  if (action.type === constants.SEARCH_FOCUS) {
    return {
      focused: true
    }
  }
  if (action.type === constants.SEARCH_BLUR) {
    return {
      focused: false
    }
  }
  return state;
}

