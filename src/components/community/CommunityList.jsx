import { FaRegCommentAlt } from "react-icons/fa";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const CommunityList = ({ ...data }) => {
  const navigate = useNavigate();
  const goDetail = () => {
    navigate(`/detail/${data.postId}`);
  };
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
  background-color: rgba(255,255,255,0.5);
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
  & .textBox {
    display: flex;
    justify-content: space-between;
    padding: 10px;
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
  background-image: url(${(props) => props.postImg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
`;

export default CommunityList;
