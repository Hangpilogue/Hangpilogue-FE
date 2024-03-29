import styled from "styled-components";
import CommunityList from "../components/community/CommunityList";
import {useDispatch, useSelector} from "react-redux";
import {getPosts} from "../redux/modules/postSlice";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {createAsyncThunk} from "@reduxjs/toolkit";
import apis from "../shared/Request";

function CommunityPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {isLogin, token} = useSelector((state) => state.tokenSlice);
  const [searchWord, setSearchWord] = useState("");

  const [list, setList] = useState([])

  const onChangeSearchWord = (e) => {
    setSearchWord(e.target.value);
  };


  //검색어 필터
  const onSearchHandler = () => {
    setList(
      list.filter((data) => {
        return data.title.includes(searchWord);
      })
    );
  };


  useEffect(() => {
    const getPosts = async () => {
      try {
        const response = await apis.getPosts();
        const result = response.data.postlists
        return setList(result);
      } catch (err) {
        console.log(err);
      }
    };
    getPosts()
  }, []);

  const goPost = () => {
    navigate("/post");
  };

  //무한스크롤
  window.onscroll = () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
    }
  };

  return (
    <div className={"CommunityPage"}>
      <StBtnBox>
        <input onChange={onChangeSearchWord} type="text"/>
        <div>
          <button onClick={onSearchHandler}>게시글찾기</button>
          <button
            onClick={() => {
              isLogin ? goPost() : alert("로그인이 필요합니다");
            }}
          >
            추가하기
          </button>
        </div>
      </StBtnBox>
      <div>
        <StListUl>
          {
            list.map((data) => {
              return <CommunityList {...data} key={data.postId}/>
            })
          }
        </StListUl>
      </div>
    </div>
  );
}

const StBtnBox = styled.div`
  display: flex;
  margin: 30px 0;
  justify-content: space-between;
  padding: 0 10px;

  & input {
    flex: 1;
    padding-left: 30px;
    border-radius: 5px;
    border: 1px solid #777;
  }

  & button {
    border: none;
    background-color: #7070c1;
    padding: 20px;
    cursor: pointer;
    border-radius: 5px;
    color: white;
    margin-left: 20px;

    &:first-child {
      width: 200px;
    }

    &:last-child {
      width: 200px;
    }
  }
`;

const StListUl = styled.ul`
  list-style: none;
  display: flex;
  width: 100%;
  flex-wrap: wrap;

  @media screen and (max-width: 1017px) {
    justify-content: space-evenly;
  }
`;

export default CommunityPage;
