import React, { useRef } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

function LogInPage() {
  const navigate = useNavigate();
  const id_ref = useRef(null);
  const pw_ref = useRef(null);

  return (
    <div>
      <StImage />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignContent: "center",
        }}
      >
        <StInput placeholder="아이디를 입력해주세요" ref={id_ref} />
        <StP>아이디는 이메일형식입니다</StP>
        <StInput
          placeholder="비밀번호를 입력해주세요"
          minLength={8}
          ref={pw_ref}
        />
        <StP>비밀번호는 8자리이상입니다</StP>
      </div>
      <StButtons>
        <StButton>로그인</StButton>
        <StButton onClick={() => navigate("/sign_up")}>회원가입</StButton>
      </StButtons>
      {/* <StInputs>
        <StInput placeholder="아이디" />
        <StCheckButton>중복확인</StCheckButton>
      </StInputs>
      <StInputs>
        <StInput placeholder="닉네임" />
        <StCheckButton>중복확인</StCheckButton>
      </StInputs>
      <StInputsPw>
        <StInputPw placeholder="비밀번호" />  */}
      {/* <label>
          영문과 숫자 조합의 8-20자의 비밀번호를 설정해주세요.
          특수문자(!@#$%^&*)도 사용 가능합니다.
        </label> */}
      {/* <StInputPw placeholder="비밀번호 재확인" /> */}
      {/* <label>비밀번호가 일치하지 않습니다</label> */}
      {/* </StInputsPw>
      <StButtons>
        <StButton>완료</StButton>
        <StButton>취소</StButton>
      </StButtons> */}
    </div>
  );
}

export default LogInPage;

const StImage = styled.div`
  background-image: url("http://jphollic.com/data/editor/goods/1/2020/03/1793_15843466948824.jpg");
  background-size: contain;
  background-repeat: no-repeat;
  width: 500px;
  height: 350px;
  margin: auto;
`;
const StInput = styled.input`
  width: 300px;
  justify-content: center;
  margin: auto;
  padding: 10px;
`;
const StP = styled.p`
  margin: 10px;
  margin-left: 330px;
  color: red;
`;
const StButton = styled.button`
  width: 150px;
  margin-top: 20px;
  padding: 10px;
  background-color: #0f5c38;
  border: 1px solid #0f5c38;
  border-radius: 3rem;
  color: #fff;
  cursor: pointer;
`;
const StButtons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;
// const StCheckButton = styled.button`
//   margin-left: 20px;
//   padding: 10px;
//   color: #3c39cf;
//   background: #fff;
//   border: 1px solid #3c39cf;
//   border-radius: 2rem;
// `;
// const StInputs = styled.div`
//   margin-top: 20px;
//   margin-left: 303px;
// `;
// const StInputsPw = styled.div`
//   display: flex;
//   flex-direction: column;
// `;
// const StInputPw = styled.input`
//   width: 300px;
//   padding: 10px;
//   margin-top: 20px;
//   margin-left: 303px;
// `;
