import React, { Component } from "react";
// import store from "./store";
import { connect } from "react-redux";
class TodoList extends Component {
  constructor(props) {
    super(props);
    // this.state = store.getState();
  }
  render() {
    return (
      <div>
        <div>
          <input
            type="text"
            value={this.props.inputValue}
            onChange={e => {
              this.props.changeInputValue(e);
            }}
          />
          <button
            onClick={e => {
              this.props.handleBtnClick();
            }}
          >
            提交
          </button>
        </div>
        <ul>
          {this.props.list.map((item, index) => {
            return (
              <li
                key={index}
                onClick={() => {
                  this.props.handleDelete(index);
                }}
              >
                {item}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    inputValue: state.inputValue,
    list: state.list
  };
};

const mapDispatchToProps = dispatch => {
  return {
    changeInputValue(e) {
      const action = { type: "change_input_value", value: e.target.value };
      dispatch(action);
    },
    handleBtnClick() {
      const action = { type: "add_item" };
      dispatch(action);
    },
    handleDelete(index) {
      const action = {
        type: "delete_item",
        index,
      };
      dispatch(action);
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
