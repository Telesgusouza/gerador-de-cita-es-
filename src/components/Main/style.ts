import styled from "styled-components";

export const Container = styled.main`
  margin: 0 auto;
  margin-top: 5rem;
  width: 100%;
  max-width: 615px;

  a {
    text-decoration: none;
  }
`;

export const MostUseful = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  margin-top: 2.8rem;
  padding: 18px 15px;

  font-size: .95rem;
  font-weight: 700;
  color: #4F4F4F;

  cursor: pointer;
  position: relative;

  transition: color 0.10s;

  img {
    height: fit-content;
    width: 30px;
    opacity: 0;
    display: none;

    transition: opacity .2s;
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 0%;
    height: 100%;
    background-color: #333333;
    z-index: -1;

    transition: width 0.4s;
  }

  &:hover {
    color: white;

    img {
      opacity: 1;
      display: block;
    }

    &::after {
      width: 100%;
    }
  }
`;
