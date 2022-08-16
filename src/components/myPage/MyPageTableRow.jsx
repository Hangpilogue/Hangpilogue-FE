import {useNavigate} from "react-router-dom";
import styled from "styled-components";

const MyPageTableRow = ({...data}) => {
  const navigate = useNavigate()
  const goDetail = ()=> {
    navigate(`/detail/${data.postId}`)
  }

  return (
    <tr onClick={goDetail}>
      <StTd>{data.postId}</StTd>
      <StTd>{data.title}</StTd>
      <StTd>{data.nickname}</StTd>
      <StTd>{data.createdAt.slice(0,10)}</StTd>
    </tr>
  )
}

const StTd = styled.td`
  cursor: pointer;
  &:hover {
    font-weight: bold;
  }
`

export default MyPageTableRow