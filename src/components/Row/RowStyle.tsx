import styled from "styled-components";

export const UserRow = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  vertical-align: middle;
  background-color: #f0f3fd;
  box-sizing: border-box;
  padding: 0.8rem 2rem;
  @media only screen and (max-width: 768px) {
    padding: 0.5rem 1rem;
  }
  :first-child {
    border-radius: 20px 20px 0 0;
  }

  :last-child {
    border-radius: 0 0 20px 20px;
  }
  :nth-of-type(odd) {
    background-color: #f9fafe;
  }
  :nth-child(1) label {
    background-color: #f43b3d;
  }
  :nth-child(2) label {
    background-color: #f97a44;
  }
  :nth-child(3) label {
    background-color: #ffa236;
  }
`;

export const UserImgBlock = styled.div`
  height: 60px;
  width: 60px;
  flex-basis: 60px;
  margin: 0 1rem 0 0;
  position: relative;
  @media only screen and (max-width: 768px) {
    width: 40px;
    height: 40px;
    flex-basis: 40px;
  }
`;

export const UserImg = styled.figure`
  background-position: center center;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  color: black;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  margin: 0;
  @media only screen and (max-width: 768px) {
    width: 40px;
    height: 40px;
  }
`;

export const Badge = styled.label`
  border-radius: 50%;
  font-size: 12px;
  height: 24px;
  width: 24px;
  line-height: 20px;
  margin-right: 20px;
  background: #fafafa;
  box-shadow: 0 0 0 2px transparent;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  overflow: hidden;
  background-color: #83b1f0;
  color : #fff;
  @media only screen and (max-width: 768px) {
    font-size: 10px;
    height: 18px;
    width: 18px;
    line-height: 18px;
  }
`;

export const UserName = styled.div`
  text-align: left;
  font-size: 20px;
  font-weight: 500;
  flex: 1;
  @media only screen and (max-width: 768px) {
    font-size: 16px;
  }
`;

export const UserPoints = styled.div`
  font-size: 20px;
  text-align: right;
  font-weight: 600;
  text-align: left;
  @media only screen and (max-width: 768px) {
    font-size: 16px;
  }
`;

export const TextLabel = styled.span`
  font-size: 18px;
  font-weight: 400;
  color: red;
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

export const ScoreSpan = styled.span`
  color: red;
`;
