// Fragment 占位
import React, { Component, Fragment } from "react";
import "antd/dist/antd.css";
import store from "./store";
import {
  getInputChangeAction,
  getAddItemAction,
  getDeleteItemAction
} from "./store/actionCreators";
import TodoListUI from "./todolistUI";
// import TodoItem from "./todoitem";
// import "./style.css";
// import axios from "axios";

class Todolist extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
    this.handleItem=this.handleItem.bind(this)
    // 订阅store变化信息
    store.subscribe(this.handleStoreChange.bind(this));
  }

  render() {
    return (
      <TodoListUI
        inputValue={this.state.inputValue}
        list={this.state.list}
        handleInputChange={this.handleInputChange}
        handleBtnClick={this.handleBtnClick}
        handleItem={this.handleItem}
      />
      // <div onClick={()=>{this.handleItem(2,22)}}>123</div>
    );
  }
  // 处理store变化
  handleStoreChange() {
    this.setState(store.getState());
  }
  handleItem(e,index) {
    console.log(index);
    const action = getDeleteItemAction(index);
    store.dispatch(action);
  }
  handleInputChange(e) {
    // 创建action
    const action = getInputChangeAction(e.target.value);
    store.dispatch(action);
  }
  handleBtnClick() {
    const action = getAddItemAction();
    store.dispatch(action);
  }
}
export default Todolist;
