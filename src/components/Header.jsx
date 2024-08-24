import logo from "/logo.png";
import { ContainerHeaderStyled, LogoStyled, NameEnterpriseStyled } from "./Header-styles"


function Header() {
    return (
        <>
            <ContainerHeaderStyled>
                <LogoStyled src={logo} alt="logo" />
                <NameEnterpriseStyled>Cineflex</NameEnterpriseStyled>
            </ContainerHeaderStyled>
        </>
    )
}

export default Header