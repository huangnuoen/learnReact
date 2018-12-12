import React, { Component } from "react";
import { connect } from "react-redux";
import { HomeWrapper, HomeLeft, HomeRight, BackTop } from "./style";
import Topic from "./components/Topic";
import List from "./components/List";
import Recommend from "./components/Recommend";
import Writer from "./components/Writer";
import { actionCreators } from "./store";
class Home extends Component {
  handleScrollTop() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <HomeWrapper>
        <HomeLeft>
          <img
            src="https://upload.jianshu.io/admin_banners/web_images/4582/2db83cc6f08d13c2f83002238ca32b784266c4fb.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"
            className="banner-img"
          />
          <Topic />
          <List>1</List>
        </HomeLeft>
        <HomeRight>
          <Recommend>1</Recommend>
          <Writer>,</Writer>
        </HomeRight>
        {this.props.showScroll ? (
          <BackTop
            onClick={() => {
              this.handleScrollTop();
            }}
          />
        ) : null}
      </HomeWrapper>
    );
  }

  bindEvents() {
    window.addEventListener("scroll", this.props.changeScrollTopShow);
  }

  componentDidMount() {
    this.props.changeHomeData();
    this.bindEvents();
  }
}
const mapState = state => ({
  showScroll: state.getIn(["home", "showScroll"])
});
const mapDispatch = dispatch => ({
  changeHomeData() {
    dispatch(actionCreators.getHomeInfo());
  },
  changeScrollTopShow() {
    if (document.documentElement.scrollTop > 100) {
      dispatch(actionCreators.toggleTopShow(true));
    } else {
      dispatch(actionCreators.toggleTopShow(false));
    }
  }
});

export default connect(
  mapState,
  mapDispatch
)(Home);
