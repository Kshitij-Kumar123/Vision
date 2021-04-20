import styled from "styled-components";

const white = "#fff";
const lightpink = "#F06B6B";
const gray = "#ccc";

export const Container = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  padding: 10px 20px;
  color: ${white};
  background-color: ${lightpink};
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 2;
`;

export const Title = styled.h3`
  a {
    color: ${white};
    
    &:hover {
      color: ${gray}
    }
  }
`;
