import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import MyPageTableRow from "../components/myPage/MyPageTableRow";
import {useEffect} from "react";
import {getPosts} from "../redux/modules/postSlice";
import {useNavigate} from "react-router-dom";

function MyPage() {
  const dispatch = useDispatch()
  const list = useSelector((state)=> state.postSlice.posts)
  const navigate = useNavigate()

  useEffect(()=> {
    dispatch(getPosts())
  },[])

  const goPost = () => {
    navigate("/post")
  }

  return (
    <StMyPage>
      <div className="tableWrapper">
      <table>
        <thead>
        <tr>
          <td>No</td>
          <td>제목</td>
          <td>글쓴이</td>
          <td>작성시간</td>
        </tr>
        </thead>
        <tbody>
        {
          list.map((data)=> (
             <MyPageTableRow {...data} key={data.id} />
          ))
        }
        </tbody>
      </table>
      </div>
        <button onClick={goPost}>글쓰기</button>
    </StMyPage>
  );
};

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
`

export default MyPage;