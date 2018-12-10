
import {
  combineReducers
} from 'redux'
import {
  reducer as headerReducer
} from '../common/header/store'
// 合并reducers
export const reducer = combineReducers({
  header: headerReducer
})

export default reducer;


