import styled from "styled-components";
import {useNavigate} from "react-router-dom";

function Header(props) {
  const navigate = useNavigate();
  return (
    <StHeader>
      <StLeftHeader>
        <StLogo onClick={() => navigate("/")}></StLogo>
      </StLeftHeader>
      <StRightHeader>
        <StNav>
          <StNavUl>
            <StNavLi onClick={() => navigate("/mypage")}>마이페이지</StNavLi>
            <StNavLi onClick={() => navigate("/post")}>포스트</StNavLi>
            <StNavLi onClick={() => navigate("/detail/:postId")}>디테일</StNavLi>
            <StNavLi onClick={() => navigate("/login")}>로그인</StNavLi>
          </StNavUl>
        </StNav>
      </StRightHeader>
    </StHeader>
  );
};


const StHeader = styled.header`
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const StLeftHeader = styled.div``

const StLogo = styled.div`
  background-image: url("/static/images/logo.webp");
  background-repeat: no-repeat;
  height: 41px;
  width: 128px;
  cursor: pointer
`


const StRightHeader = styled.div``


const StNav = styled.nav``

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
