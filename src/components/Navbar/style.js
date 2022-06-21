import styled from "styled-components";

export const NavbarSection = styled.div`
  padding: 5px 0;

  border-bottom: 1px solid #777;
  .a {
    transform: rotate(180deg);
    color: #eb5424;
    transition: all 0.3s linear;
  }
`;
export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  & .fa {
    transition: all 0.3s ease-in-out;

    &:hover {
      transform: rotate(180deg);
      color: #eb5424;
    }
  }
`;
export const Logo = styled.div`
  width: 50%;
`;
export const LogoText = styled.h2`
  font-size: 30px;
  color: #eb5424;
  @media (max-width: 500px) {
    font-size: 26px;
  }
  @media (max-width: 400px) {
    font-size: 19px;
  }
`;
export const UlList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  &.active {
    left: 0;
  }
  @media (max-width: 991px) {
    position: fixed;
    flex-direction: column;
    top: 85px;
    width: 100%;
    height: 100%;
    left: -100%;
    right: 0;
    z-index: 10;
    background-color: #eb5424;
    text-align: center;
    & li {
    }
  }
`;
export const ListItem = styled.li`
  display: inline-block;
`;
export const Anchor = styled.a`
  display: block;
  text-decoration: none;
  color: #222;
  padding: 10px 15px;
  font-weight: bold;
  border: none;
  &:hover {
    color: #eb5424;
    border: 1px solid #eb5424;
  }
`;
export const FaBars = styled.div`
  display: none;
  cursor: pointer;
  @media (max-width: 991px) {
    display: block;
  }
`;
