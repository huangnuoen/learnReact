import React, { Component } from "react";
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  Addition,
  Button,
  SearchWrapper
} from "./style";
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      focused: false
    };
  }
  render() {
    return (
      <HeaderWrapper>
        {" "}
        <Logo href="/"> </Logo>
        <Nav>
          <NavItem className="left">首页</NavItem>
          <NavItem className="left">下载APP</NavItem>
          <NavItem className="right">APP</NavItem>
          <NavItem className="right">
            <i className="iconfont ">&#xe636;</i>
          </NavItem>
          <SearchWrapper>
            <NavSearch
              onFocus={() => {
                this.handleInputFocus();
              }}
              onBlur={() => {
                this.handleInputBlur();
              }}
              className={this.state.focused ? "focused" : ""}
            />
            <i className={this.state.focused ? "focused iconfont" : "iconfont"}>
              &#xe678;
            </i>
          </SearchWrapper>
        </Nav>
        <Addition>
          <Button className="writting">
            <i className="iconfont">&#xe617;</i>写文章
          </Button>
          <Button className="reg">注册</Button>
        </Addition>
      </HeaderWrapper>
    );
  }

  handleInputFocus() {
    this.setState({
      focused: true
    });
  }

  handleInputBlur() {
    this.setState({
      focused: false
    });
  }
}

export default Header;
