import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";

function InputBox(props) {
  const {
    name,
    placeholder = null,
    max = null,
    min = null,
    required = null,
    action = null,
    value = "",
    title = null,
    onChange,
  } = props;

  return (
    <TextInputBox>
      <label htmlFor={name}>
        {title}
        {required}
      </label>
      <input
        type="text"
        placeholder={`${placeholder}`}
        name={name}
        maxLength={max}
        minLength={min}
        required={required}
        ref={useRef}
        // onChange={(e)=> {
        // const currentValue = e.target.value;}}

        onChange={onChange}
      ></input>
    </TextInputBox>
  );
}

export default InputBox;

const TextInputBox = styled.div`
  max-width: 500px;
  min-width: 400px;
  margin: 0 auto 10px;
  display: flex;
  flex-flow: column;

  label {
    font-size: 14px;
    color: #555;
    padding: 10px 0 5px;
  }
  input {
    padding: 10px 10px;
    width: 500px;
  }
`;
