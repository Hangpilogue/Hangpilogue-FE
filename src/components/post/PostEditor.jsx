import styled from "styled-components";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useRef, useState} from "react";
import {editPosts, getPosts, postPosts} from "../../redux/modules/postSlice";
import {storage} from "../../shared/firebase";
import {ref, uploadBytes, getDownloadURL} from "firebase/storage"



const PostEditor = ({isEdit, originData}) => {
  const inputs = useRef([])
  const uploadImage = useRef()
  const fileLinkRef = useRef(null)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  // const isLoading = useSelector(state => state.postSlice.isLoading)
  const {isLoading, status} = useSelector(state => state.postSlice)
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

  useEffect(()=> {
    if(isEdit) {
      setPosts({
        title: originData.title,
        content: originData.content,
        nickname: originData.nickname,
        img:originData.img,
        id:originData.postId
      })
      setPreviewImg(originData.img)
    }
  },[isEdit, originData])

  const {title, content} = posts
  const onChangeHandler = (e) => {
    const {value, name} = e.target
    setPosts({
      ...posts,
      [name]: value
    })
  }

  const handleFileOnChange =async (event) => {
    event.preventDefault();
    let reader = new FileReader()


    const uploaded_file = await uploadBytes(ref(storage,`images/${event.target.files[0].name}`),
      event.target.files[0])

    console.log(uploaded_file);

    const fileUrl = await getDownloadURL(uploaded_file.ref)
    console.log(fileUrl)

    fileLinkRef.current = {url:fileUrl}

    let file = event.target.files[0]
    setPostFile(event.target.files[0])
    reader.onloadend = () => {
      setPreviewImg(reader.result)
      setPosts({
        ...posts,
        img: fileLinkRef.current.url
      })
    }
    reader.readAsDataURL(file)
  }

  console.log(posts)


  const onSubmitHandler = () => {
    for (let i = 0; i < inputs.current.length; i++) {
      if(inputs.current[i].value.length <1) {
        alert("빈칸이 있습니다.")
        return
      }
    }
    if(uploadImage.current.value<1) {
      if(window.confirm("이미지 업로드 안할꺼야?")) {
        if(isEdit) {
          dispatch(editPosts(posts))
          dispatch(getPosts())
          alert("수정 완료!")
          navigate("/")
        } else {
          dispatch(postPosts(posts))
          dispatch(getPosts())
          alert("포스팅 완료!")
          navigate("/")
        }
      }
    } else{
      if(isEdit) {
        dispatch(editPosts(posts))
        dispatch(getPosts())
        alert("수정 완료!")
        navigate("/")
      } else {
        dispatch(postPosts(posts))
        dispatch(getPosts())
        alert("포스팅 완료!")
        navigate("/")
      }
    }
  }

  const onCancelHandler = () => {
    if(window.confirm("취소하시겠습니까?")) {
      navigate("/mypage")
    }
  }

  if(isLoading===true) {
    return (
      <div>
        로딩중입니다
      </div>
    )
  } else {
    return (
      <StPostPage>
        <StWrapper>
          <StPostTitle>
            <label htmlFor={"title"}>게시글 제목</label>
            <input ref={(element)=>(inputs.current[0] = element)} name={"title"} value={title} onChange={onChangeHandler} id={"title"} type="text"/>
          </StPostTitle>
          <StPostImage>
            <StPostImageBox postImg={previewImg}/>
            <input id={"uploadImg"} value={postFile.name || ""} onChange={() => {
            }} placeholder={"첨부파일"}/>
            <label htmlFor={"img"}>파일찾기</label>
            <input type='file'
                   id={"img"}
                   ref={uploadImage}
                   name={"img"}
                   accept='image/jpg,impge/png,image/jpeg,image/gif'
                   onChange={handleFileOnChange}>
            </input>
          </StPostImage>
          <StPostContent>
            <label htmlFor={"content"}>게시글 내용</label>
            <textarea ref={(element)=>(inputs.current[1] = element)} name={"content"} value={content} onChange={onChangeHandler} id={"content"}
                      placeholder={"후기를 남겨주세요!"}></textarea>
          </StPostContent>
          <StBtnBox>
                <StBtn onClick={onSubmitHandler} color={"green"}>{isEdit?"수정":"완료"}</StBtn>
            <StBtn onClick={onCancelHandler} color={"red"}>취소</StBtn>
          </StBtnBox>
        </StWrapper>
      </StPostPage>
    )
  }
  

}

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

export default PostEditor