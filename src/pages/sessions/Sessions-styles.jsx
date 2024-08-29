import styled from "styled-components";

export const SessionStyled = styled.div`
  background: #2B2D36;
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 23px;
  margin-right: 20px;
  margin-left: 20px;

  h3 {
    font-size: 20px;
    font-weight: 400;
    line-height: 32.61px;
    letter-spacing: 0.04em;
    text-align: left;
    color: #FFFFFF;
    margin-bottom: 15px;
    padding-bottom: 10px;
    border-bottom: 1px solid #444;
    width: 100%;

  }

  div {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 10px;
  }

  p {
    background-color: transparent;
    color: #EE897F;
    padding: 8px;
    border: 2px solid #EE897F;
    border-radius: 8px;
    text-align: center;
    cursor: pointer;
    font-size: 16px;
    transition: all 0.2s ease-in-out;
    font-weight: 400;
    line-height: 26.09px;
    letter-spacing: 0.04em;


    &:hover {
      background-color: #EE897F;
      color: #FFFFFF;
    }
  }
`;