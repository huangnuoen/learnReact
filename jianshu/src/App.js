import React, { Component } from "react";
import { Provider } from "react-redux";
import { Globalstyle } from "./style";
// import { BrowserHistory, Route } from "react-router-dom";
import { BrowserRouter, Route } from "react-router-dom";
import "./statics/iconfont/iconfont.css";
import Header from "./common/header";
import Home from "./pages/home";
import Detail from "./pages/detail";
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
                <Route path="/" exact component={Home} />
                <Route path="/detail" exact component={Detail} />
              </div>
            </BrowserRouter>
          </div>
        </Provider>
      </div>
    );
  }
}

export default App;
