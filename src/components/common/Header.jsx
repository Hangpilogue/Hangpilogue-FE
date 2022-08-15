import styled from "styled-components";
import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {logIn, logOut} from "../../redux/modules/tokenSlice";
import {clearMyPosts} from "../../redux/modules/postSlice";

function Header(props) {
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const {isLogin, token} = useSelector(state => state.tokenSlice)

  useEffect(()=> {
    if(token) {
      dispatch(logIn())
    }
  })


  return (
    <StHeader>
      <div className={"leftContainer"}>
        <StLogo onClick={() => navigate("/")}></StLogo>
      </div>
      <div className={"rightContainer"}>
        <nav>
          <StNavUl>
            <StNavLi onClick={() => navigate("/mypage")}>마이페이지</StNavLi>
            <StNavLi onClick={() => navigate("/post")}>포스트</StNavLi>
            <StNavLi onClick={() => navigate("/detail/:postId")}>디테일</StNavLi>
            <StNavLi onClick={() => {
              if (isLogin) {
                dispatch(logOut())
                dispatch(clearMyPosts())
                alert("로그아웃 하셨습니다.")
                navigate("/login")
              } else {
                navigate("/login")
              }
            }}>
              {isLogin ? "로그아웃" : "로그인"}
            </StNavLi>
          </StNavUl>
        </nav>
      </div>
    </StHeader>
  );
};


const StHeader = styled.header`
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const StLogo = styled.div`
  background-image: url("/static/images/logoImage.png");
  background-repeat: no-repeat;
  background-size: contain;
  height: 41px;
  width: 128px;
  cursor: pointer
`


const StNavUl = styled.ul`
  display: flex;
  list-style: none;
`

const StNavLi = styled.li`
  padding: 10px 20px;
  margin: 0 10px;
  cursor: pointer;
`

export default Header;
