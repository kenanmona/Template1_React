import styled from "styled-components";

export const AboutSection = styled.div`
  background-image: url("images/creative/about-bg.jpg");
  background-size: cover;
  background-attachment: fixed;
  background-position: center;
  height: 600px;
  position: relative;
`;
export const AboutInfo = styled.div`
  position: absolute;
  right: 2%;
  top: 50%;
  transform: translateY(-50%);
  width: 48%;
  @media (max-width: 767px) {
    width: 98%;
    left: 1%;
    right: 1%;
    top: 100%;
    transform: translateY(-100%);
  }
`;
export const Title = styled.h2`
  font-size: 35px;
  color: #333;
  font-weight: normal;
  span {
    font-weight: bold;
    font-size: 60px;
    color: #eb5424;
  }
`;
export const Dir = styled.h4`
  color: #eb5424;
  font-size: 35px;
  margin: 0;
`;
export const Desc = styled.p`
  line-height: 1.8;
  color: #777;
`;
