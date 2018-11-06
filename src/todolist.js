// Fragment 占位
import React, { Component, Fragment } from "react";
import "antd/dist/antd.css";
import { Input, Button, List } from "antd";
import store from "./store";
import {
  getInputChangeAction,
  getAddItemAction,
  getDeleteItemAction
} from "./store/actionCreators";
// import TodoItem from "./todoitem";
// import "./style.css";
// import axios from "axios";

class Todolist extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
    // 订阅store变化信息
    store.subscribe(this.handleStoreChange.bind(this));
  }

  render() {
    return (
      <div style={{ margin: "10px" }}>
        <div>
          <Input
            value={this.state.inputValue}
            placeholder="todo sth"
            style={{ width: "300px", marginRight: "10px" }}
            onChange={e => this.handleInputChange(e)}
          />
          <Button
            type="primary"
            onClick={() => {
              this.handleBtnClick();
            }}
          >
            提交
          </Button>
        </div>
        <List
          bordered
          dataSource={this.state.list}
          renderItem={(item, index) => (
            <List.Item
              onClick={() => {
                this.handleItem(index);
              }}
            >
              {item}
            </List.Item>
          )}
        />
      </div>
    );
  }
  // 处理store变化
  handleStoreChange() {
    this.setState(store.getState());
  }
  handleItem(index) {
    const action = getDeleteItemAction(index)
    store.dispatch(action);
  }
  handleInputChange(e) {
    // 创建action
    const action = getInputChangeAction(e.target.value);
    store.dispatch(action);
  }
  handleBtnClick() {
    const action = getAddItemAction()
    store.dispatch(action);
  }
}
export default Todolist;
