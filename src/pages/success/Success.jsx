import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Container, InfoSection, InfoTitle, InfoText, TitleStyle } from "./Success-styles";
import { Button } from "../seats/Seats-styles";

function Success() {
    const location = useLocation();
    const navigate = useNavigate();

    // Obtendo os dados passados pela navegação
    const { movie, day, name, seats, buyer } = location.state || {};

    return (
        <>
            <TitleStyle>Pedido finalizado!</TitleStyle>
            <Container>
                <InfoSection>
                    <InfoTitle>Filme e sessão</InfoTitle>
                    <InfoText>{movie.title}</InfoText>
                    <InfoText>{day.date} às {name}</InfoText>

                    <InfoTitle>Ingressos</InfoTitle>
                    {seats.map(seat => (
                        <InfoText key={seat.id}>Assento {seat.name}</InfoText>
                    ))}

                    <InfoTitle>Comprador(a)</InfoTitle>
                    <InfoText>Nome: {buyer.name}</InfoText>
                    <InfoText>CPF: {buyer.cpf}</InfoText>
                </InfoSection>

                <Button onClick={() => navigate("/")}>Voltar para tela inicial</Button>
            </Container>
        </>
    );
}

export default Success;
