import styled from "styled-components";
export const WorkSection = styled.div`
  height: auto;
  padding: 50px 0;
`;
export const WorkTitle = styled.h2`
  font-size: 60px;
  color: #eb5424;
  span {
    font-weight: normal;
    font-size: 40px;
    color: #333;
  }
  @media (max-width: 767px) {
    text-align: center;
  }
`;
export const WorkContent = styled.div`
  text-align: center;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 10px;
`;
export const WorkPart = styled.div`
  border: 1px solid #888;
  padding: 60px 0;
`;
export const Icon = styled.i`
  color: #666;
  margin-bottom: 20px;
`;
export const PartTitle = styled.h4`
  color: #eb5424;
  font-size: 25px;
  margin-bottom: 20px;
`;
export const Line = styled.hr`
  width: 60%;
  margin: auto;
  margin-bottom: 20px;
`;
export const PartDesc = styled.p`
  font-size: 14px;
  color: #777;
  padding: 20px;
`;
