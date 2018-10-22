import React, { Component, Fragment } from "react";

class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  render() {
    const {content}  = this.props;
    
    return <li onClick={this.handleClick}>{content}</li>;
  }
  // 子调父方法
  handleClick() {
    this.props.handleItemDetele(this.props.index);
  }
}

export default TodoItem;
