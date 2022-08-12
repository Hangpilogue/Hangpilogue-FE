//src.pages.DetailPage.jsx

import styled from "styled-components";

import InputBox from "../components/common/InputBox";
import Button from "../components/common/Button";

function DetailPage() {

    return (
        <>
        <DetailLayout>
            <div className="container">
                <div className="titleContainer">
                    <span> 제목이 들어갑니다 </span>
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
            
            <CommentLayout>
                <InputBox
                name={"comment"}
                placeholder={"댓글 내용"}
                max={100}
                required
                />
                <div>
                <Button 
                type="button"
                buttonText={"댓글달기"}
                action={null}
                />
                </div>
            </CommentLayout>
        </>
    );
};

export default DetailPage;


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

const CommentLayout = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    max-width: 800px;
    min-width: 500px;
    min-height: 10vh;
    padding: 10px 10px;
    margin:  50px;

`;


