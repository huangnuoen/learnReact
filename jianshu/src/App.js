import React, { Component } from "react";
import { Globalstyle } from "./style";
import './statics/iconfont/iconfont.css'
import Header from './common/header'
class App extends Component {
  render() {
    return (
      <div>
        <Globalstyle />
        <Header>
        </Header>
      </div>
    );
  }
}

export default App;
