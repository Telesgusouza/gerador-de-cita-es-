import styled from "styled-components";

export const Container = styled.header`
  padding: 20px;
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;

  font-size: 15px;
  
  img {
    width: 15px;
    margin-left: 10px;
    transition: rotate .5s ease;
  }

  div {
    float: right;
    display: flex;
    align-items: center;
    width: fit-content;

    cursor: pointer;

    &:hover {
      img {
        rotate: 360deg;
      }
    }
  }

`;
