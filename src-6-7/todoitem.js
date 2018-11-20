import React, { Component, Fragment } from "react";
import propTypes from "prop-types";

class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  render() {
    console.log("child render");

    const { content } = this.props;

    return <li onClick={this.handleClick}>{content}</li>;
  }
  // 从父组件接收了参数
  // 且父组件的render重新执行了就会执行
  componentWillReceiveProps() {
    console.log("componentWillReceiveProps");
  }
  componentWillUnmount() {
    console.log("child componentWillUnmount");
  }
  // 子调父方法
  handleClick() {
    this.props.handleItemDetele(this.props.index);
  }
}
TodoItem.propTypes = {
  content: propTypes.string.isRequired,
  handleItemDetele: propTypes.func
  // content: propTypes.string
};
TodoItem.defaultProps = {
  content: "hello"
};
export default TodoItem;
