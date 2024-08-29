import styled from "styled-components";

export const SessionStyled = styled.div`
  background: #2B2D36;
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 23px;
  margin-right: 20px;
  margin-left: 20px;

  h3 {
    font-size: 18px;
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
    color: #FF6F61;
    padding: 10px;
    border: 2px solid #FF6F61;
    border-radius: 8px;
    text-align: center;
    cursor: pointer;
    font-size: 16px;
    transition: all 0.2s ease-in-out;

    &:hover {
      background-color: #FF6F61;
      color: #FFFFFF;
    }
  }
`;