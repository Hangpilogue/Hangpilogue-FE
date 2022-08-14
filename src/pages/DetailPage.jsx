//src.pages.DetailPage.jsx

import React from "react";


import DetailPost from "../components/detail/DetailPost";
import Comment from "../components/detail/Comment";





function DetailPage() {


    return (
        <>
            <DetailPost 
            // list={{...post} key= {post.postId}}
            />
            <Comment />
        </>
    );
};

export default DetailPage;

