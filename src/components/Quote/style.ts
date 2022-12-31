import styled from "styled-components";

export const Container = styled.div`
  font-size: 1.6rem;
  position: relative;
  padding-left: 15px;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: -70px;
    width: 5px;
    height: 100%;

    background-color: #f7df94;
  }
`;
