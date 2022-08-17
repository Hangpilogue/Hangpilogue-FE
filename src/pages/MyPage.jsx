import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import MyPageTableRow from "../components/myPage/MyPageTableRow";
import { useEffect, useState } from "react";
import { getMyPosts } from "../redux/modules/postSlice";
import { useNavigate } from "react-router-dom";
import { logIn } from "../redux/modules/tokenSlice";

function MyPage() {
  const dispatch = useDispatch();
  // console.log(lista)
  const navigate = useNavigate();
  // const [list,setList] = useState([])

  const { token } = useSelector((state) => state.tokenSlice);
  if (!token) {
    alert("로그인이 필요한 기능입니다");
    navigate("/");
  }

  useEffect(() => {
    if (token) {
      dispatch(logIn());
    }
  }, []);

  useEffect(() => {
    dispatch(getMyPosts());
  }, []);
  const list = useSelector((state) => state.postSlice.myPosts);
  console.log(list);

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
            {list.map((data) => (
              <MyPageTableRow {...data} key={data.postId} />
            ))}
          </tbody>
        </table>
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

  & button {
    margin-top: 30px;
    padding: 10px 30px;
    color: white;
    border-radius: 5px;
    border: none;
    background-color: black;
    cursor: pointer;
  }
`;

export default MyPage;
