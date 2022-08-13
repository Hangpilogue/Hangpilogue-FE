import styled from "styled-components";
import {FaRegCommentAlt} from "react-icons/fa";
import CommunityList from "../components/community/CommunityList";
import {useDispatch, useSelector} from "react-redux";
import {getPosts} from "../redux/modules/postSlice";
import {useEffect} from "react";
import {useNavigate} from "react-router-dom";

function CommunityPage() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const postList = useSelector(state => state.postSlice)

  console.log(postList)

  useEffect(()=> {
    dispatch(getPosts())
  },[])

  const goPost = () => {
    navigate("/post")
  }

  return (
    <StCommunityPage>
      <StBtnBox>
        <button>게시글찾기</button>
        <button onClick={goPost}>추가하기</button>
      </StBtnBox>
      <StPostBox>
        <StListUl>
          {
            postList.map((data)=> (
              <CommunityList {...data} key={data.id} />
            ))
          }
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

export default CommunityPage;