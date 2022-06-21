import styled from "styled-components";
export const ContactSection = styled.div`
  margin-top: 40px;
  text-align: center;
  input,
  textarea {
    border: 1px solid #ccc;
    padding: 10px;
    outline: none;
    &:hover,
    &:hover::placeholder,
    &:focus,
    &:focus::placeholder {
      border-color: #eb5424;
      color: #eb5424;
    }
  }
`;
export const Title = styled.h2`
  font-size: 50px;
  @media (max-width: 600px) {
    font-size: 35px;
  }
  @media (max-width: 400px) {
    font-size: 28px;
  }
`;
export const Form = styled.form`
  padding: 0;
  margin: 0;
  & > input {
    width: 100%;
    margin: 20px 0;
  }
  & > textarea {
    width: 100%;
    height: 200px;
  }
  & > [type="submit"] {
    width: 30%;
    &:hover {
      background-color: #eb5424;
      color: white;
    }
    @media (max-width: 600px) {
      width: 140px;
    }
  }
`;
export const FormInput = styled.div`
  & > input {
    width: 49%;
    &:first-of-type {
      margin-right: 2%;
    }
    @media (max-width: 600px) {
      width: 100%;
      &:first-of-type {
        margin-right: 0;
        margin-bottom: 20px;
      }
    }
  }
`;
