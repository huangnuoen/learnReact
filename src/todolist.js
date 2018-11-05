// Fragment 占位
import React, { Component, Fragment } from "react";
import "antd/dist/antd.css";
import { Input, Button, List } from "antd";
import store from "./store";
// import TodoItem from "./todoitem";
// import "./style.css";
// import axios from "axios";

class Todolist extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
  }

  render() {
    return (
      <div style={{ margin: "10px" }}>
        <div>
          <Input
            value={this.state.inputValue}
            placeholder="todo sth"
            style={{ width: "300px", marginRight: "10px" }}
            onChange={(e) => this.handleInputChange(e)}
          />
          <Button type="primary">提交</Button>
        </div>
        <List
          bordered
          dataSource={this.state.list}
          renderItem={item => <List.Item>{item}</List.Item>}
        />
      </div>
    );
  }
  handleInputChange(e) {
    // 创建action
    const action = {
      type: 'change_input_value',
      value: e.target.value
    }
    store.dispatch(action)
    console.log(e.target.value);
  }
}
export default Todolist;
