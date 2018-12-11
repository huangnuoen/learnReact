import React, { Component } from "react";
import { HomeWrapper, HomeLeft, HomeRight } from "./style";
import Topic from "./components/Topic";
import List from "./components/List";
import Recommend from "./components/Recommend";
import Writer from "./components/Writer";
class Home extends Component {
  render() {
    return (
      <HomeWrapper>
        <HomeLeft>
          <img
            src="https://upload.jianshu.io/admin_banners/web_images/4582/2db83cc6f08d13c2f83002238ca32b784266c4fb.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"
            className="banner-img"
          />
          <Topic></Topic>
          <List>1</List>

        </HomeLeft>
        <HomeRight >
          <Recommend>1</Recommend>
          <Writer>,</Writer>
        </HomeRight>
      </HomeWrapper>
    );
  }
}

export default Home;
