import styled from "styled-components";
export const PortfolioSection = styled.div`
  background-color: #f8f8f8;
  padding-top: 20px;
  text-align: center;
`;
export const PortfolioTitle = styled.div`
  font-size: 60px;
  color: #eb5424;
  span {
    font-weight: normal;
    font-size: 40px;
    color: #333;
  }
`;
export const PortfolioList = styled.ul`
  list-style: none;
  padding: 0;
`;
export const PortfolioItem = styled.li`
  display: inline-block;
  padding: 10px;
  border: 1px solid transparent;
  width: 100px;
  cursor: pointer;
  &:hover {
    color: #eb5424;
    border-color: #eb5424;
  }
  @media (max-width: 600px) {
    font-size: 13px;
    width: fit-content;
  }
`;
export const PortfolioBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;
export const BoxContent = styled.div`
  width: 24%;
  padding: 5px;
  height: 200px;
  position: relative;
  &:hover > div {
    display: block;
  }
  &:hover > img {
    transform: scale(1.04);
  }
  @media (max-width: 991px) {
    width: 50%;
  }
  @media (max-width: 600px) {
    width: 90%;
    margin: 0 5%;
  }
`;
export const Image = styled.img`
  width: 100%;
  height: 100%;
`;
export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgb(235, 84, 36, 0.5);
  display: none;
`;
export const OverlaySpan = styled.span`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  display: block;
  padding: 10px;
  cursor: pointer;
  border: 1px solid #ebebeb;
  border: none;
  &:hover {
    background-color: #eb5424;
    color: white;
  }
`;
