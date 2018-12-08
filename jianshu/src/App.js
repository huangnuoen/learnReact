import React, { Component } from "react";
import { Provider } from "react-redux";
import { Globalstyle } from "./style";
import "./statics/iconfont/iconfont.css";
import Header from "./common/header";
import store from "./store";
class App extends Component {
  render() {
    return (
      <div>
        <Globalstyle />
        {/* provider把store提供给内部组件 */}
        <Provider store={store}>
          <Header />
        </Provider>
      </div>
    );
  }
}

export default App;
