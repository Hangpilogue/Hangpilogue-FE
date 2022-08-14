import styled from "styled-components";
import CommunityList from "../components/community/CommunityList";
import {useDispatch, useSelector} from "react-redux";
import {getPosts, getPosts2} from "../redux/modules/postSlice";
import {useEffect} from "react";
import {useNavigate} from "react-router-dom";

function CommunityPage() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const postList = useSelector(state => state.postSlice.posts)
  const tr = useSelector((state)=> state.postSlice.isLoading)
  console.log(tr)
  
  //최신순정렬
  const LatestList = [...postList].reverse()

  useEffect(()=> {
    dispatch(getPosts())
  },[])

  console.log(postList)

  const goPost = () => {
    navigate("/post")
  }

  if(tr===true) {
    return (
      <div>로딩중입니다</div>
    )
  }else {
    return (
      <div className={"CommunityPage"}>
        <StBtnBox>
          <button>게시글찾기</button>
          <button onClick={goPost}>추가하기</button>
        </StBtnBox>
        <div>
          <StListUl>
            {
              LatestList.map((data)=> (
                <CommunityList {...data} key={data.id} />
              ))
            }
          </StListUl>
        </div>
      </div>
    );
  }
};

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