import React from "react";
import { connect } from "react-redux";
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
import { CSSTransition } from "react-transition-group";
import { actionCreators } from "./store";
const Header = props => {
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
          <CSSTransition timeout={200} in={props.focused} classNames="slide">
            <NavSearch
              onFocus={() => {
                props.handleInputFocus();
              }}
              onBlur={() => {
                props.handleInputBlur();
              }}
              className={props.focused ? "focused" : ""}
            />
          </CSSTransition>
          <i className={props.focused ? "focused iconfont" : "iconfont"}>
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
};
// 把state映射到props上，state即是store
const mapStateToProps = state => {
  return {
    focused: state.get('header').get('focused')
  };
};
// 映射方法到props上，方法可以调用store的dispatch
const mapdispatchToProps = dispatch => {
  return {
    handleInputFocus() {
      dispatch(actionCreators.searchFocus());
    },
    handleInputBlur() {
      dispatch(actionCreators.searchBlur());
    }
  };
};
// export default Header;
// 把store映射到props上，
export default connect(
  mapStateToProps,
  mapdispatchToProps
)(Header);
