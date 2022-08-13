////src/components/posts/DetailPost


import styled from "styled-components";

import Button from "../common/Button";

import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getPost } from "../../redux/modules/postSlice"


function DetailPost() {

    const dispatch = useDispatch();
    const list = useSelector( state => state )
    console.log(list.title)

    useEffect(() => {
        dispatch((getPost()))
    })


    return (
        <>
            <DetailLayout>
                <div className="container">
                    <div className="titleContainer">
                        <span> 제목이들어갑니다 </span>
                    </div>
                    <div className="buttonContainer">
                        <Button 
                        type="button"
                        buttonText={"수정하기"}
                        action={console.log("진짜로??")}
                        />
                        <Button 
                        type="button"
                        buttonText={"삭제하기"}
                        action={console.log("진짜진짜로????")}
                        />
                    </div>
                </div>

                    <div className="imageContainer">
                        <div> 이미지가 들어갑니다 </div>
                    </div>
                    <div className="textContainer">
                        <div> 내용이 들어갑니다 </div>
                    </div>
            </DetailLayout>
                

        </>
    );
};

export default DetailPost;


const DetailLayout = styled.div`
    /* background-color: aliceblue; */
    border: 2px solid #aaa;
    border-radius: 4px ;

    max-width: 800px;
    min-width: 500px;
    min-height: 80vh;
    padding: 50px 20px;
    margin:  50px;

.container {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.titleContainer {
    /* flex-direction: column;
    justify-content: center; */
}
.buttonContainer {
    display: flex;
}

.imageContainer {
    border: 2px solid #aaa;
    border-radius: 4px;

    max-width:500px;
    min-width:300px;
    min-height: 40vh;
    padding: 50px 20px;
    margin: 50px auto;
}

.textContainer {
    border: 2px solid #aaa;
    border-radius: 4px;

    max-width:500px;
    min-width:300px;
    min-height: 20vh;
    padding: 50px 20px;
    margin: 50px auto;
}
`;
