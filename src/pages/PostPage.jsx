import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";

import {useEffect, useState} from "react";
import {postPosts} from "../redux/modules/postSlice";
import {useNavigate} from "react-router-dom";

function PostPage() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  //미리보기
  const [previewImg, setPreviewImg] = useState("https://socialistmodernism.com/wp-content/uploads/2017/07/placeholder-image.png")
  //파일 이름 placeholder
  const [postFile, setPostFile] = useState("")
  const [posts, setPosts] = useState({
    title: "",
    content: "",
    nickname: "",
    img:previewImg
  })

  const {title, content} = posts
  const onChangeHandler = (e) => {
    const {value, name} = e.target
    setPosts({
      ...posts,
      [name]: value
    })
  }

  const handleFileOnChange = (event) => {
    event.preventDefault();
    let reader = new FileReader()
    let file = event.target.files[0]
    setPostFile(event.target.files[0])
    reader.onloadend = () => {
      setPreviewImg(reader.result)
      setPosts({
        ...posts,
        img: reader.result
      })
    }
    reader.readAsDataURL(file)
  }

  const onSubmitHandler = () => {
    dispatch(postPosts(posts))
    alert("포스팅 완료!")
    navigate("/")
  }




  return (
    <StPostPage>
      <StWrapper>
        <StPostTitle>
          <label htmlFor={"title"}>게시글 제목</label>
          <input name={"title"} value={title} onChange={onChangeHandler} id={"title"} type="text"/>
        </StPostTitle>
        <StPostImage>
          <StPostImageBox postImg={previewImg}/>
          <input id={"uploadImg"} value={postFile.name || ""} onChange={() => {
          }} placeholder={"첨부파일"}/>
          <label htmlFor={"img"}>파일찾기</label>
          <input type='file'
                 id={"img"}
                 name={"img"}
                 accept='image/jpg,impge/png,image/jpeg,image/gif'
                 onChange={handleFileOnChange}>
          </input>
        </StPostImage>
        <StPostContent>
          <label htmlFor={"content"}>게시글 내용</label>
          <textarea name={"content"} value={content} onChange={onChangeHandler} id={"content"}
                    placeholder={"후기를 남겨주세요!"}></textarea>
        </StPostContent>
        <StBtnBox>
          <StBtn onClick={onSubmitHandler} color={"green"}>완료</StBtn>
          <StBtn color={"red"}>취소</StBtn>
        </StBtnBox>
      </StWrapper>
    </StPostPage>
  );
};

const StOutline = styled.div`
  border: 1px solid #eee;
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 15px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;

  & label {
    font-size: 18px;
    color: #777;
    font-weight: 700;
    padding-left: 10px;
  }
`

const StPostPage = styled.div`
  padding: 15px;
  display: flex;
  justify-content: center;
`

const StWrapper = styled.div`
  width: 500px;
`

const StPostTitle = styled(StOutline)`
  display: flex;
  flex-direction: column;

  & input {
    height: 40px;
    padding: 0 10px;
    vertical-align: middle;
    border: none;
    border-bottom: 1px solid #dddddd;
    margin-top: 10px;

    &:active {
      outline: none;
    }

    &:focus {
      outline: none;
    }
  }
`

const StPostImage = styled(StOutline)`
  margin-bottom: 10px;

  & #uploadImg {
    height: 40px;
    padding: 0 10px;
    vertical-align: middle;
    border: 1px solid #dddddd;
    width: calc(100% - 109px);
    color: #999999;
    border-radius: 5px;

    &:active {
      outline: none;
    }

    &:focus {
      outline: none;
    }
  }

  & label {
    padding: 9px 20px;
    color: #fff;
    font-size: 16px;
    vertical-align: middle;
    background-color: #999999;
    cursor: pointer;
    height: 40px;
    margin-left: 10px;
    border-radius: 5px;
  }

  & #img {
    position: absolute;
    width: 0;
    height: 0;
    padding: 0;
    overflow: hidden;
    border: 0;
    display: none;
  }
`

const StPostImageBox = styled.div`
  height: 300px;
  margin-bottom: 10px;
  border-radius: 5px;
  background-image: url(${(props) => (props.postImg)});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
`

const StPostContent = styled(StOutline)`

  & textarea {
    margin-top: 10px;
    width: 100%;
    height: 150px;
    border: none;
    resize: none;
    padding: 10px;

    &:active {
      outline: none;
    }

    &:focus {
      outline: none;
    }
  }
`

const StBtnBox = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
`

const StBtn = styled.button`
  width: 50%;
  border: none;
  background-color: ${(props) => props.color};
  padding: 10px 20px;
  border-radius: 10px;
  color: white;
  cursor: pointer;

  &:first-child {
    margin-right: 10px;
  }
`

export default PostPage;