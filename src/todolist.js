// Fragment 占位
import React, { Component, Fragment } from "react";
import TodoItem from "./todoitem";
import "./style.css";
class Todolist extends Component {
  constructor(props) {
    super();
    this.state = {
      inputValue: "",
      list: []
    };
    this.handleBtnClick = this.handleBtnClick.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleItemClick=this.handleItemClick.bind(this)
  }

  render() {
    return (
      <Fragment>
        <div>
          <label htmlFor="insertArea">输入</label>
          <input
            id="insertArea"
            className="input"
            type="text"
            value={this.state.inputValue}
            onChange={this.handleInputChange}
          />
          <button onClick={this.handleBtnClick}>提交</button>
        </div>
        <ul>
          {this.state.list.map((item, index) => {
            return (
              <div>
                <TodoItem
                  content={item}
                  index={index}
                  // 传给子方法
                  handleItemDetele={this.handleItemClick}
                />
              </div>
            );
          })}
        </ul>
      </Fragment>
    );
  }

  handleItemClick(i) {
    // 最好不好直接修改state,不好做性能优化
    const list = [...this.state.list];
    list.splice(i, 1);
    this.setState({
      list
    });
  }

  handleInputChange(e) {
    this.setState({ inputValue: e.target.value });
  }

  handleBtnClick(e) {
    this.setState({
      list: [...this.state.list, this.state.inputValue],
      inputValue: ""
    });
  }
}
export default Todolist;
