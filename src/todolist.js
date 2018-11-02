// Fragment 占位
import React, { Component, Fragment } from "react";
import "antd/dist/antd.css";
import { Input, Button, List } from "antd";
// import TodoItem from "./todoitem";
// import "./style.css";
// import axios from "axios";
const data = [
  "Racing car sprays burning fuel into crowd.",
  "Japanese princess to wed commoner.",
  "Australian walks 100km after outback crash.",
  "Man charged over missing wedding girl.",
  "Los Angeles battles huge wildfires."
];
class Todolist extends Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <div style={{ margin: "10px" }}>
        <div>
          <Input
            placeholder="todo sth"
            style={{ width: "300px", marginRight: "10px" }}
          />
          <Button type="primary">提交</Button>
        </div>
        <List
          bordered
          dataSource={data}
          renderItem={item => <List.Item>{item}</List.Item>}
        />
      </div>
    );
  }
}
export default Todolist;
