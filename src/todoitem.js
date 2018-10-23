import React, { Component, Fragment } from "react";
import PropTypes from 'prop-types'

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
TodoItem.PropTypes = {
  content: PropTypes.string.isRequired,
  handleItemDetele: PropTypes.func,
  content: PropTypes.number
};
TodoItem.defaultProps = {
  content: 'hello'
}
export default TodoItem;
