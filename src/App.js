import React, { Component, Fragment } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "./style.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      show: true
    };
    this.handleToggle = this.handleToggle.bind(this);
    this.handleAddItem = this.handleAddItem.bind(this);
  }
  render() {
    return (
      <Fragment>
        <TransitionGroup>
          {this.state.list.map((item, i) => {
            return (
              <CSSTransition
                timeout={5000}
                classNames="fade"
                unmountOnExit
                onEntered={el => {
                  el.style.color = "blue";
                }}
                appear={true}
                key={i}
              >
                <div>
                  {item}
                  {i}
                </div>
              </CSSTransition>
            );
          })}
        </TransitionGroup>
        <button onClick={this.handleAddItem}>toggle</button>
      </Fragment>
    );
  }
  handleToggle() {
    this.setState({
      show: !this.state.show
    });
  }
  handleAddItem() {
    this.setState(prevState => {
      return {
        list: [...prevState.list, "item"]
      };
    });
  }
}

export default App;
