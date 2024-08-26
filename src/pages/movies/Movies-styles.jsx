import styled from "styled-components";


export const ContainerMoviesStyled = styled.ul`
display: grid;
grid-template-columns: repeat(auto-fill, minmax(145px, 1fr));
width: 100%;
max-width: 100%;
gap: 20px;
padding-left: 20px;
padding-right: 20px;
`

export const ImgStyled = styled.img`
width: 100%;
border-radius: 10px;
`