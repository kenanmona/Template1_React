import styled from "styled-components";
export const HomeSection = styled.div`
  background-image: url("../images/Home/home-bg.jpg");
  background-size: cover;
  background-position: center;
  min-height: 500px;
  position: relative;
  margin-top: 40px;
`;
export const Information = styled.div`
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
export const Title = styled.h2`
  font-size: 50px;
  color: #555;
  @media (max-width: 767px) {
    font-size: 32px;
  }
`;
export const Info = styled.h4`
  color: #eb5424;
  font-size: 35px;
  margin: 0;
  @media (max-width: 767px) {
    font-size: 22px;
  }
`;
export const Desc = styled.p`
  color: #777;
  line-height: 1.8;
  span {
    color: #000;
    font-weight: bold;
  }
`;
export const Button = styled.button`
  border: none;
  background-color: #eb5424;
  color: white;
  display: inline-block;
  padding: 10px 20px;
  font-size: 18px;
  cursor: pointer;
  border: 1px solid transparent;
  &:hover {
    color: #eb5424;
    background-color: white;
    border: 1px solid #eb5424;
  }
`;
