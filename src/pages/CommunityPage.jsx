import styled from "styled-components";
import {FaRegCommentAlt} from "react-icons/fa";

function CommunityPage() {

  return (
    <StCommunityPage>
      <StBtnBox>
        <button>게시글찾기</button>
        <button>추가하기</button>
      </StBtnBox>
      <StPostBox>
        <StListUl>
          <StListLi>
            <div className="img"></div>
            <div className="textBox">
              <div className="title">제목입니다</div>
              <div className="commentCount"><FaRegCommentAlt className={"commentIcon"}/>99</div>
            </div>
          </StListLi>
          <StListLi>
            <div className="img"></div>
            <div className="textBox">
              <div className="title">제목입니다</div>
              <div className="commentCount"><FaRegCommentAlt className={"commentIcon"}/>99</div>
            </div>
          </StListLi>
          <StListLi>
            <div className="img"></div>
            <div className="textBox">
              <div className="title">제목입니다</div>
              <div className="commentCount"><FaRegCommentAlt className={"commentIcon"}/>99</div>
            </div>
          </StListLi>
          <StListLi>
            <div className="img"></div>
            <div className="textBox">
              <div className="title">제목입니다</div>
              <div className="commentCount"><FaRegCommentAlt className={"commentIcon"}/>99</div>
            </div>
          </StListLi>
          <StListLi>
            <div className="img"></div>
            <div className="textBox">
              <div className="title">제목입니다</div>
              <div className="commentCount"><FaRegCommentAlt className={"commentIcon"}/>99</div>
            </div>
          </StListLi>
          <StListLi>
            <div className="img"></div>
            <div className="textBox">
              <div className="title">제목입니다</div>
              <div className="commentCount"><FaRegCommentAlt className={"commentIcon"}/>99</div>
            </div>
          </StListLi>
          <StListLi>
            <div className="img"></div>
            <div className="textBox">
              <div className="title">제목입니다</div>
              <div className="commentCount"><FaRegCommentAlt className={"commentIcon"}/>99</div>
            </div>
          </StListLi>
        </StListUl>
      </StPostBox>
    </StCommunityPage>
  );
};

const StCommunityPage = styled.div``

const StBtnBox = styled.div`
  display: flex;
  margin: 30px 0;

  & button {
    border: none;
    background-color: #7070c1;
    padding: 20px;
    cursor: pointer;
    border-radius: 5px;
    color: white;

    &:first-child {
      width: 75%;
      margin-right: 30px;
    }

    &:last-child {
      width: 25%;
    }
  }
`

const StPostBox = styled.div``

const StListUl = styled.ul`
  list-style: none;
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  
  @media screen and (max-width: 1017px) {
    justify-content: space-evenly;
  }
`

const StListLi = styled.li`
  width: 300px;
  border-radius: 5px;
  overflow: hidden;
  margin: 10px;
  & .img {
    width: 100%;
    height: 300px;
    background-color: #7070c1;
  }

  & .textBox {
    display: flex;
    justify-content: space-between;
    padding: 10px;
    border-bottom: 1px solid #777;
    border-left: 1px solid #777;
    border-right: 1px solid #777;
    border-radius: 0 0 5px 5px;

    & .title {
      padding-right: 20px;
    }
  }

  & .commentCount {
    display: flex;
    align-items: center;

    & .commentIcon {
      margin-right: 10px;
    }
  }

`

export default CommunityPage;