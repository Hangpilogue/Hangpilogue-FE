import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const RegisterPage = () => {
  const navigate = useNavigate();
  //   const id_ref = React.useRef(null);
  //   const name_ref = React.useRef(null);
  //   const pw_ref = React.useRef(null);
  //   const confirmPw_ref = React.useRef(null);
  //   const addUser = () => {
  //     const userData = {
  //       id: id_ref.current.value,
  //       name: name_ref.current.value,
  //       pw: pw_ref.current.value,
  //       confirmPw: confirmPw_ref.current.value,
  //     };
  //     navigate("/login");
  //   };
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [nickname, setnickname] = useState("");

  const [data, setData] = useState({
    email: "",
    password: "",
    // confirmPassword: "",
    nickname: "",
  });

  const [userIdError, setUserIdError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [confirmPasswordError, setConfirmPasswordError] = useState(false);
  const [nicknameError, setnicknameError] = useState(false);
  const [checkEmail, setCheckEmail] = useState({ email: "" });
  const [checknickname, setChecknickname] = useState({ nickname: "" });
  const [dupEmail, setDupEmail] = useState(false);
  const [dupnickname, setDupnickname] = useState(false);

  const onChangeUserId = (e) => {
    const userIdRegex =
      /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;

    if (!e.target.value || userIdRegex.test(e.target.value))
      setUserIdError(false);
    else setUserIdError(true);
    setUserId(e.target.value);
    setData({ ...data, email: e.target.value });
    setCheckEmail({ email: e.target.value });
  };
  const onChangePassword = (e) => {
    const passwordRegex =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@!%*#?&])[A-Za-z\d@!%*#?&]{8,13}$/;
    if (!e.target.value || passwordRegex.test(e.target.value))
      setPasswordError(false);
    else setPasswordError(true);

    if (!confirmPassword || e.target.value === confirmPassword)
      setConfirmPasswordError(false);
    else setConfirmPasswordError(true);
    setPassword(e.target.value);
    setData({ ...data, password: e.target.value });
  };
  const onChangeConfirmPassword = (e) => {
    if (password === e.target.value) setConfirmPasswordError(false);
    else setConfirmPasswordError(true);
    setConfirmPassword(e.target.value);
    // setData({ ...data, confirmPassword: e.target.value });
  };
  const onChangenickname = (e) => {
    const nicknameRegex = /^[a-zA-Zㄱ-힣0-9-_.]{2,12}$/;
    if (!e.target.value || nicknameRegex.test(e.target.value))
      setnicknameError(false);
    else setnicknameError(true);
    setnickname(e.target.value);
    setData({ ...data, nickname: e.target.value });
    setChecknickname({ nickname: e.target.value });
  };
  const onCheckEmail = async () => {
    if (userIdError) {
      alert("이메일이라고!!");
      return;
    }
    const res = await axios
      .post("http://taesik.shop/api/user/dup/email", checkEmail)
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          alert("사용가능한 이메일이야");
          setDupEmail(true);
        }
      })
      .catch((res) => {
        if (res.response.status === 409) {
          alert("이미 존재하는 이메일이야");
        }
      });
  };
  const onChecknickname = async () => {
    if (nicknameError) {
      alert("형식에 맞게 써");
      return;
    }
    const res = await axios
      .post("http://taesik.shop/api/user/dup/nickname", checknickname)
      .then((res) => {
        if (res.status === 200) {
          alert("사용가능한 닉네임이야");
          setDupnickname(true);
        }
      })
      .catch((res) => {
        if (res.response.status === 409) {
          alert("이미 존재하는 닉네임이야");
        }
      });
  };

  //   const validation = () => {
  //   if (!userId) setUserIdError(true);
  //     if (!password) setPasswordError(true);
  //     if (!confirmPassword) setConfirmPasswordError(true);
  //     if (!nickname) setnicknameError(true);

  //     if (userId && password && confirmPassword && nickname) return true;
  //     else return false;
  //   };

  const onSubmit = async () => {
    // if (validation()) {
    //   return;
    // }
    if (!userId) setUserIdError(true);
    if (!password) setPasswordError(true);
    if (!confirmPassword) setConfirmPasswordError(true);
    if (!nickname) setnicknameError(true);
    if (!userId || !nickname || !password || !confirmPassword) {
      return alert("제대로 입력해!");
    }

    // if (userId && password && confirmPassword && nickname) return true;

    // if (userIdError) return;
    // if (nicknameError) return;

    // if (passwordError) return;
    // if (confirmPasswordError) return;

    // alert("아무거나");

    if (
      userId !== "" &&
      nickname !== "" &&
      password !== "" &&
      confirmPassword !== ""
    ) {
      if (dupEmail === false) {
        alert("이메일 중복확인을 완료해");
        return;
      } else if (dupnickname === false) {
        alert("닉네임 중복확인을 완료해");
        return;
      }
      await axios
        .post("http://taesik.shop/api/user/signup", data)
        .then((response) => {
          // if (response.response.status === 400) {
          //   alert("다시 한 번 확인해봐");
          // } else
          if (response.status === 200) {
            navigate("/login");
          }
        })
        .catch((response) => {
          if (response.response.status === 500) {
            alert("다시 한 번 확인해봐");
          } else if (response.response.status === 400) {
            alert("제대로 작성해");
          }
        });
    }
  };
  return (
    <div>
      <StDiv>
        <StImg alt="totoro" src="img/totoro.png.png" />
      </StDiv>
      <StContainer>
        <StInputs>
          <StInput
            placeholder="아이디"
            value={userId}
            onChange={(e) => {
              onChangeUserId(e);
              setDupEmail(false);
            }}
          />
          <StCheckButton onClick={onCheckEmail}>중복확인</StCheckButton>
        </StInputs>
        {userIdError && (
          <div style={{ color: "red" }}>이메일 형식으로 해주세요</div>
        )}
        <StInputs>
          <StInput
            placeholder="닉네임"
            minLength={2}
            maxLength={12}
            type="text"
            value={nickname}
            onChange={(e) => {
              onChangenickname(e);
              setDupnickname(false);
            }}
          />
          <StCheckButton onClick={onChecknickname}>중복확인</StCheckButton>
        </StInputs>
        {nicknameError && (
          <div style={{ color: "red" }}>2~12글자로 해주세요</div>
        )}
        <StInputsPw>
          <StInputPw
            placeholder="비밀번호"
            value={password}
            type={"password"}
            onChange={onChangePassword}
          />
          {passwordError && (
            <div style={{ color: "red", width: "300px" }}>
              영문과 숫자, 특수문자(!@#$%^&*)조합의 8-13자의 비밀번호를
              설정해주세요.
            </div>
          )}

          <StInputPw
            placeholder="비밀번호 재확인"
            value={confirmPassword}
            type={"password"}
            onChange={onChangeConfirmPassword}
          />
          {confirmPasswordError && (
            <div style={{ color: "red" }}>비밀번호가 일치하지 않습니다</div>
          )}
        </StInputsPw>
      </StContainer>
      <StButtons>
        <StButton onClick={onSubmit}>완료</StButton>
        <StButton onClick={() => navigate("/login")}>취소</StButton>
      </StButtons>
    </div>
  );
};

export default RegisterPage;

// const StImage = styled.div`
//   background-image: url("http://jphollic.com/data/editor/goods/1/2020/03/1793_15843466948824.jpg");
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
const StContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const StInput = styled.input`
  width: 300px;
  justify-content: center;
  margin: auto;
  padding: 10px;
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
const StCheckButton = styled.button`
  margin-left: 20px;
  padding: 10px;
  color: #3c39cf;
  background: #fff;
  border: 1px solid #3c39cf;
  border-radius: 2rem;
  cursor: pointer;
`;
const StInputs = styled.div`
  margin-top: 20px;
  margin-left: 93px;
`;
const StInputsPw = styled.div`
  display: flex;
  flex-direction: column;
`;
const StInputPw = styled.input`
  width: 300px;
  padding: 10px;
  margin-top: 20px;
`;
