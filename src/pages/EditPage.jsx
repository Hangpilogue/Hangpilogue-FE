import PostEditor from "../components/post/PostEditor";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate, useParams} from "react-router-dom";
import {getPosts} from "../redux/modules/postSlice";

function EditPage() {
  const postList = useSelector((state) => state.postSlice.posts)
  const dispatch = useDispatch()
  const [originData, setOriginData] = useState()
  const {postId} = useParams()
  const navigate = useNavigate()

  useEffect(()=> {
    dispatch(getPosts())
  },[])

  useEffect(()=> {
    if(postList.length>=1) {
      const targetPost = postList.find((data)=>parseInt(data.id)===parseInt(postId))
      if(targetPost) {
        setOriginData(targetPost)
      }else {
        alert("없는 페이지입니다.")
        navigate("/",{replace:true})
      }
    }
  })

  return (
    <>
      {
        originData && <PostEditor isEdit={true} originData={originData} />
      }
    </>
  );
};

export default EditPage;