import React, { Component } from "react";
import { ListItem, ListInfo, LoadMore } from "../style";
import { connect } from "react-redux";
import { actionCreators } from "../store";

class List extends Component {
  render() {
    const { list, getMoreList, page } = this.props;
    return (
      <div>
        {list.map(item => {
          return (
            <ListItem key={item.get("id")}>
              <img className="pic" src={item.get("imgUrl")} alt="" />
              <ListInfo>
                <h3 className="title">{item.get("title")}</h3>
                <p className="desc">{item.get("desc")}</p>
              </ListInfo>
            </ListItem>
          );
        })}
        <LoadMore onClick={() => getMoreList(page)}>更多文字</LoadMore>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    list: state.get("home").get("articleList"),
    page: state.get("home").get("articlePage")
  };
};
const mapDispatch = dispatch => ({
  getMoreList(page) {
    dispatch(actionCreators.getMoreList(page));
  }
});
export default connect(
  mapStateToProps,
  mapDispatch
)(List);
