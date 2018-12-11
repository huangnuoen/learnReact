import React, { Component } from "react";
import { Provider } from "react-redux";
import { Globalstyle } from "./style";
// import { BrowserHistory, Route } from "react-router-dom";
import { BrowserRouter, Route } from "react-router-dom";
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
          <div>
            <Header />
            <BrowserRouter>
              <div>
                <Route path="/" exact render={() => <div>12</div>} />
                <Route path="/detail" exact render={() => <div>detail</div>} />
              </div>
            </BrowserRouter>
          </div>
        </Provider>
      </div>
    );
  }
}

export default App;
