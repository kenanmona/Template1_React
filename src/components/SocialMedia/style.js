import styled from "styled-components";
export const SocialMediaSection = styled.div``;
export const Social = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
`;

export const Content = styled.div`
  height: 300px;
  background-color: ${(props) => (props.color ? props.color : "#fff")};
  position: relative;
  & > div {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
export const Icon = styled.i`
  /* display: block; */
  width: 75px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  background: #fff;
  color: #777;
  border-radius: 6px;
  &:hover {
    background: #eb5424;
    color: white;
  }
`;
export const Info = styled.p`
  text-transform: uppercase;
  color: white;
  font-size: 18px;
  text-align: left;
  margin-left: 20px;
  & span:first-of-type {
    font-weight: bold;
    display: inline-block;
    width: 100%;
  }
  @media (max-width: 900px) {
    font-size: 16px;
  }
`;
