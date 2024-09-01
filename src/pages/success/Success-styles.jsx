import styled from "styled-components";

export const TitleStyle = styled.p`
display: flex;
align-items: center;
justify-content: center;
height: 80px;
font-size: 24px;
font-weight: 400;
line-height: 39.13px;
letter-spacing: 0.04em;
text-align: center;
color: #9DB899;
`

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    padding-top: 0;
    border-radius: 10px;
    width: 100%;
    max-width: 600px;
    margin: 0 auto;
    color: #ffffff;
`;

export const InfoSection = styled.div`
    width: 100%;
    padding: 15px;
    margin-bottom: 10px;
    background-color: #2B2D36;
    border-radius: 5px;
`;

export const InfoTitle = styled.h2`
    font-size: 22px;
    font-weight: 700;
    line-height: 35.87px;
    letter-spacing: 0.04em;
    text-align: left;
    color: #EE897F;


    position: relative;
        &::after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        width: 100%;
        border-bottom: 1px solid #444;
    }
`;

export const InfoText = styled.p`
    font-size: 16px;
    font-weight: 400;
    color: #e0e0e0;
    margin: 2px 0;
`;

export const Button = styled.button`
    width: 100%;
    padding: 10px;
    margin-top: 20px;
    background-color: #f28b82;
    color: #1c1c1c;
    font-size: 16px;
    font-weight: 700;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    &:hover {
        background-color: #e57373;
    }
`;