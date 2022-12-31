import styled from "styled-components";

export const Container = styled.div`
  font-size: 1.6rem;
  position: relative;
  padding-left: 15px;

  cursor: default;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: -70px;
    width: 5px;
    height: 100%;

    background-color: #f7df94;
  }

  @media (max-width: 820px) {
    &::after {
      left: -20px;
    }
  }

  @media (max-width: 520px) {
    font-size: 1.4em;
  }
`;
