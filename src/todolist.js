// Fragment 占位
import React, { Component, Fragment } from "react";
import "antd/dist/antd.css";
import store from "./store";
import {
  getInputChangeAction,
  getAddItemAction,
  getDeleteItemAction,
  getTodoList
} from "./store/actionCreators";
import TodoListUI from "./TodoListUI";
// import axios from "axios";
// import TodoItem from "./todoitem";
// import "./style.css";

class Todolist extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
    this.handleItemDelete = this.handleItemDelete.bind(this);
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
        handleItemDelete={this.handleItemDelete}
      />
    );
    // <div onClick={()=>{this.handleItem(2,22)}}>123</div>
  }
  componentDidMount() {
    // axios.get("api/list").then(res => {
    //   const action = initListAction(res.data);
    //   store.dispatch(action)
    // });
    // 函数
    const action = getTodoList();
    // 会自动执行action
    store.dispatch(action);
  }
  // 处理store变化
  handleStoreChange() {
    this.setState(store.getState());
  }
  handleItemDelete(index) {
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
