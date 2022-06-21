import styled from "styled-components";
export const ProfileSection = styled.div`
  margin-top: 40px;
`;
export const ProfileContent = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 991px) {
    flex-direction: column;
    text-align: center;
    & > div {
      margin-bottom: 50px;
    }
  }
`;
export const Section = styled.div`
  flex: 1;
`;
export const ProfileTitle = styled.h2`
  color: #eb5424;
  font-size: 50px;
  span {
    color: #333;
    font-size: 35px;
    font-weight: normal;
  }
  @media (max-width: 991px) {
    text-align: center;
  }
`;
export const InfoProfile = styled.div`
  p {
    line-height: 1.8;
    color: #777;
    span {
      color: #222;
      font-weight: bold;
    }
  }
`;
export const SectionTitle = styled.h2`
  font-size: 40px;
  margin-top: -20px;
  margin-bottom: 10px;
  color: #333;
`;
export const Text = styled.p`
  color: #777;
  line-height: 1.8;
`;
export const SkillsSection = styled.div``;
export const SkillInfo = styled.div``;
export const SkillTitle = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0;
  p {
    color: #333;
    margin-bottom: 5px;
    margin-top: 20px;
  }
`;
export const SkilllPercent = styled.div`
  position: relative;
  height: 2px;
  background-color: #eee;
  span {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: ${(props) => (props.width ? props.width : "0")};
    background-color: #eb5424;
  }
`;
