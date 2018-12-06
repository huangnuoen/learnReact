import styled from "styled-components";
import logoPic from '../../statics/logo.jpg'
export const HeaderWrapper = styled.div `
  height: 56px;
  border-bottom: 1px solid #f0f0f0;
`;
export const Logo = styled.a `
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 100px;
  height: 56px;
  background:url(${logoPic}) center;
`;
export const Nav = styled.div `
  width:960px;
  height:100%;
  margin:0 auto;
  padding-right:70px;
  box-sizing:border-box;
`

export const NavItem = styled.div `
  line-height:56px;
  font-size:17px;
  padding:0 15px;
  color: #333;
  &.left{
    float:left;
  }
  &.right{
    float:right;
    color:#969696;
  }
`

export const NavSearch = styled.input.attrs({
  placeholder: '搜索'
})
`
  width:200px;
  height:38px;
  border:none;
  outline:none;
  background:#eee;
  margin-top:9px;
  padding:0 15px;
  border-radius:20px;
  &::placeholder{
    color: #999;
  }
`

export const Addition = styled.div `
  position:absolute;
  right:0;
  top:0;
  height:56px;
`

export const Button = styled.div `
  float:right;
  margin-top:8px;
  line-height:38px;
  border-radius:20px;
  color: #ec6149;
  border: 1px solid #ec6149;
  text-align:center;
  font-size:14px;
  padding: 0 15px;
  &.reg{
    color: #ec6149;
    margin-right:8px;
  }
  &.writting{
    color:#fff;
    background: #ec6149;
  }

`