import { RiAddCircleFill } from "react-icons/ri";
import styled from "styled-components";

const mobileSize = "768px";
const white = "#fff";
const black = "#000";
const darkgray = "#767676";
const lightpink = "#F06B6B";
const darkpink = "#853F3F";

export const Container = styled.div`
  margin: 5rem 7rem;
  display: flex;
  flex-direction: column;
  @media only screen and (max-width: ${mobileSize}) {
    margin: 5rem 1rem;
  }
`;

export const Card = styled.div`
  border-radius: 2rem;
  display: flex;
  min-height: 8rem;
  padding: 1em;
  background: ${white};
  margin: 1em;
  max-width: 100rem;
  justify-content: space-around;
  @media only screen and (max-width: ${mobileSize}) {
    flex-direction: column;
    padding: 1em;
    justify-content: center;
  }
  box-shadow: 0px 6px 6px rgba(0, 0, 0, 0.14), 0px 6px 9px rgba(0, 0, 0, 0.12),
    6px 6px 9px rgba(0, 0, 0, 0.2);
    background-color: #f0f0f0;
`;

export const AddCard = styled.div`
  border: 2px dashed ${lightpink};
  border-radius: 1rem;
  display: flex;
  min-height: 10rem;
  padding: 2em;
  justify-content: center;
  align-items: center;
  margin: 1em;
  max-width: 100rem;
  @media only screen and (max-width: ${mobileSize}) {
    flex-direction: column;
    padding: 1em;
    justify-content: center;
  }
  box-shadow: 0px 6px 6px rgba(0, 0, 0, 0.14), 0px 6px 9px rgba(0, 0, 0, 0.12),
    6px 6px 9px rgba(0, 0, 0, 0.2);
  background-color: ${darkpink};
`;

export const Content = styled.div`
  font-size: 1em;
  color: ${(props) => props.color};
  font-weight: 700;
  margin: 0.2em 0;
  display: flex;
  align-items: center;
`;

export const IconContent = styled(Content)`
  &:hover {
    cursor: pointer;
    text-decoration: none;
  }
`;

export const SubCard = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const AddSubCard = styled.div`
  display: flex;
  justify-content: center;
`;

export const Text = styled.div`
  font-style: italic;
  line-height: 1em;
  height: 5em;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const SubData = styled.div`
  display: flex;
  flow-direction: column;
  > .p {
    color: gray;
  }
`;

export const Information = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 2rem;
  width: 33%;
  @media only screen and (max-width: ${mobileSize}) {
    width: 100%;
  }
`;

export const Heading = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  margin-left: 20px;
  font-weight: 700;
`;

export const Data = styled.div`
  margin: 8px;
  border: 2px solid ${black};
  box-sizing: border-box;
  border-radius: 4px;
  display: flex;
  font-weight: 600;
  padding: 0.5rem 1rem;
`;

export const Image = styled.img`
  width: 140px;
  object-fit: scale-down;
  border-radius: 20px;
  margin-right: 1em;
  padding: 5px;
`;

export const AddData = styled.div`
  margin: 1rem;
  height: 107px;
  margin: 8px;
  color: ${black};
  display: flex;
  :hover {
    background: ${white};
  }
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-weight: 600;
  padding: 1rem 2rem;
  font-size: 14px;
  border: 2px dashed ${darkgray};
  border-radius: 4px;
`;

export const AddPlus = styled(RiAddCircleFill)`
  font-size: 6rem;
  color: ${lightpink};
`;
