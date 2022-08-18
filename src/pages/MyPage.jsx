import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import MyPageTableRow from "../components/myPage/MyPageTableRow";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {logIn} from "../redux/modules/tokenSlice";
import apis from "../shared/Request";

function MyPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [allList, setAllList] = useState([])
  let [currentList, setCurrentList] = useState([])
  const [currentPage, setCurrentPage] = useState([])

  const {token} = useSelector((state) => state.tokenSlice);
  if (!token) {
    alert("로그인이 필요한 기능입니다");
    navigate("/");
  }

  useEffect(() => {
    if (token) {
      dispatch(logIn());
    }
  }, [logIn]);

  const [page, setPage] = useState(1)

  const onPageMove = async (data) => {
    let lastIndex = data*10
    setCurrentList(allList.slice(lastIndex-10,lastIndex))
    console.log(data)
  }

  const onNext = () => {
    setPage(6)
    const getMyPosts = async () => {
      try {
        const response = await apis.getMyPosts(page)
        setCurrentPage(response.data.mypostlists.currentPages)
        setAllList(response.data.mypostlists.mypage)
      } catch (err) {
        console.log(err);
      }
    };
    getMyPosts()
  }

  const onPrev = () => {
    setPage(1)
    const getMyPosts = async () => {
      try {
        const response = await apis.getMyPosts(page)
        setCurrentPage(response.data.mypostlists.currentPages)
        setAllList(response.data.mypostlists.mypage)
      } catch (err) {
        console.log(err);
      }
    };
    getMyPosts()
  }

  useEffect(() => {
    const getMyPosts = async () => {
      try {
        const response = await apis.getMyPosts(page)
        setCurrentPage(response.data.mypostlists.currentPages)
        setAllList(response.data.mypostlists.mypage)
      } catch (err) {
        console.log(err);
      }
    };
    getMyPosts()
  }, []);
  useEffect(()=> {
    if(page===1) {
      setCurrentList(allList.slice(0,10))
    }
  },[allList])


  const goPost = () => {
    navigate("/post");
  };
  return (
    <StMyPage>
      <div className="tableWrapper">
        <table>
          <thead>
          <tr>
            <td>No</td>
            <td>제목</td>
            <td>글쓴이</td>
            <td>작성일</td>
          </tr>
          </thead>
          <tbody>
          {currentList.map((data) => (
            <MyPageTableRow {...data} key={data.postId}/>
          ))}
          </tbody>
        </table>
      </div>
      <div className="pagination">
        <ol>
          <button onClick={onPrev}>이전</button>
          {currentPage.map((data, i) => (
            <li key={i}>
              <button onClick={() => {
                onPageMove(i+1)
              }}>
                {data}
              </button>
            </li>
          ))}
          <button onClick={onNext}>다음</button>
        </ol>

      </div>
      <button onClick={goPost}>글쓰기</button>
    </StMyPage>
  );
}

const StMyPage = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 100px;
  align-items: center;
  flex-direction: column;

  .tableWrapper {
    width: 100%;
  }

  & table {
    width: 100%;
    border-top: 1px solid black;
    border-collapse: collapse;
  }

  & thead td {
    &:nth-child(3) {
      width: 15%;
      text-align: center;
      color: black;
    }

    &:nth-child(4) {
      width: 20%;
      text-align: center;
      color: black;
    }
  }

  & td {
    padding: 10px 20px;
    border-bottom: 1px solid #ccc;

    &:first-child {
      width: 10%;
      text-align: center;
    }

    &:nth-child(2) {
      width: 55%;
    }

    &:nth-child(3) {
      width: 15%;
      text-align: center;
      color: #999;
    }

    &:nth-child(4) {
      width: 20%;
      text-align: center;
      color: #999;
    }
  }

  ol {
    list-style: none;
    display: flex;

    & li {
      margin: 0 10px;
    }
  }

  & button {
    margin-top: 30px;
    padding: 10px 30px;
    border-radius: 5px;
    border: 1px solid #eee;
    cursor: pointer;

    &:hover {
      border: 1px solid black;
      color: white;
      background-color: black;
    }
  }
`;

export default MyPage;
