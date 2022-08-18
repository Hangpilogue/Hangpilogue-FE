import { FaRegCommentAlt } from "react-icons/fa";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const CommunityList = ({ ...data }) => {
  const navigate = useNavigate();
  const goDetail = () => {
    navigate(`/detail/${data.postId}`);
  };

  console.log(data)
  // console.log(data.img)

  return (
    <StListLi onClick={goDetail}>
      <StImgArea className="img" postImg={data.img}></StImgArea>
      <div className="textBox">
        <div className="title">{data.title}</div>
        <div className="commentCount"><FaRegCommentAlt className={"commentIcon"}/>{data.countcomment}</div>
      </div>
    </StListLi>
  );
};

const StListLi = styled.li`
  width: 300px;
  border-radius: 5px;
  overflow: hidden;
  margin: 10px;
  cursor: pointer;
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
`;

const StImgArea = styled.div`
  height: 300px;
  border: 1px solid black;
  background-image: url(${(props) => props.postImg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
`;

export default CommunityList;
