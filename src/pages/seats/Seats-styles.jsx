import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    border-radius: 10px;
    width: 100%;
    margin: 0 auto;
`;

export const SeatsGrid = styled.ul`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(26px, 1fr));
    gap: 7px;
    list-style: none;
    padding: 0;
    margin: 20px 0;
    width: 100%;
    padding-bottom: 38px;
    position: relative;

    &::after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        width: 90%;
        border-bottom: 1px solid #444;
    }
`;

export const SeatStyled = styled.li`
    width: 100%;
    height: 26px;
    max-width: 26px;
    background-color: ${(props) => (props.$selected ? "#FADBC5" : props.$isAvailable ? "#9DB899" : "#2B2D36")};
    border: ${(props) => (props.$selected ? "2px solid #EE897F" : "none")};
    color: #2B2D36;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    font-family: Roboto;
    font-size: 11px;
    font-weight: 400;
    line-height: 12.89px;
    letter-spacing: 0.04em;
    text-align: center;
`;

export const InputGroup = styled.form`
    width: 100%;
    gap: 11px;
    margin-bottom: 36px;
    display: flex;
    flex-direction: column;

    label{
    font-size: 16px;
    font-weight: 400;
    line-height: 26.09px;
    }
`;

export const Input = styled.input`
    width: 100%;
    padding: 10px;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    box-sizing: border-box;
`;

export const Button = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 42px;
    padding: 15px;
    background-color: #EE897F;
    color: #2B2D36;
    border: none;
    border-radius: 5px;
    font-size: 18px;
    font-weight: 700;
    line-height: 29.35px;
    letter-spacing: 0.04em;
`;
