import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { setCookie } from "../util/cookie";
import { useDispatch, useSelector } from "react-redux";
import { goToHome, setLogin } from "../redux/modules/loginCheck";
import { useCookies } from "react-cookie";
import { logIn } from "../redux/modules/tokenSlice";

function LogInPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [userIdError, setUserIdError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [cookies, setCookie] = useCookies(["token"]);
  const onChangeUserId = (e) => {
    const userIdRegex = /^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/;
    if (!e.target.value || userIdRegex.test(e.target.value))
      setUserIdError(false);
    else setUserIdError(true);
    setUserId(e.target.value);
    setLoginData({ ...loginData, email: e.target.value });
  };
  const onChangePassword = (e) => {
    const passwordRegex =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@!%*#?&])[A-Za-z\d@!%*#?&]{8,13}$/;
    if (!e.target.value || passwordRegex.test(e.target.value))
      setPasswordError(false);
    else setPasswordError(true);
    setPassword(e.target.value);
    setLoginData({ ...loginData, password: e.target.value });
  };
  const onSubmit = async () => {
    if(userId==="") {
      alert("아이디가 빈칸이야")
      return
    }
    if(password === "") {
      alert("비밀번호가 빈칸이야")
      return
    }
    if (userId !== "" && password !== "") {
      if (userIdError === true && passwordError === true) {
        alert("양식에 맞게 입력해");
        return;
      }
    }
    if(userIdError===false) {
      alert("아이디 양식이 틀렸어");
      return;
    }
    axios
      .post("http://taesik.shop/api/user/login", loginData)
      .then((result) => {
        let expires = new Date();
        expires.setMinutes(expires.getMinutes() + 60);
        setCookie("token", result.data.token, { path: "/", expires });
        dispatch(logIn());
        navigate("/");
      })
      .catch((res) => {
        if (res.response.status === 401) {
          alert(res.response.data);
        }
      });
  };

  return (
    <div>
      <StDiv>
        <StImg alt="totoro" src="img/totoro.png.png" />
      </StDiv>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignContent: "center",
        }}
      >
        <StInput
          placeholder="아이디를 입력해주세요"
          type="email"
          value={userId}
          onChange={onChangeUserId}
        />
        {userIdError && <StP>아이디는 이메일형식입니다</StP>}
        <StInput
          type={"password"}
          placeholder="비밀번호를 입력해주세요"
          minLength={8}
          value={password}
          onChange={onChangePassword}
        />
        {passwordError && <StP>비밀번호는 8자리이상입니다</StP>}
      </div>
      <StButtons>
        <StButton onClick={onSubmit}>로그인</StButton>
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

// const StImage = styled.div`
//   background-image: src("images/totoro.png");
//   background-size: contain;
//   background-repeat: no-repeat;
//   width: 500px;
//   height: 350px;
//   margin: auto;
// `;
const StImg = styled.img`
  width: 500px;
  height: 350px;
  margin: auto;
  background-size: contain;
`;
const StDiv = styled.div`
  display: flex;
  justify-content: center;
`;
const StInput = styled.input`
  width: 300px;
  justify-content: center;
  margin: auto;
  margin-top: 20px;
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
