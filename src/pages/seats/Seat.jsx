import { useParams, useNavigate } from "react-router-dom";
import { TitleStyles } from "../../components/Title-styles";
import {
    Container,
    SeatsGrid,
    SeatStyled,
    InputGroup,
    Input,
    Button
} from "./Seats-styles";
import { useEffect, useState } from "react";
import axios from "axios";

function Seat() {
    const { idSessao } = useParams();
    const navigate = useNavigate();
    const [seats, setSeats] = useState(null);
    const [selectedSeats, setSelectedSeats] = useState([]);
    const [name, setName] = useState("");
    const [cpf, setCpf] = useState("");

    useEffect(() => {
        const getSeats = axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/showtimes/${idSessao}/seats`);

        getSeats.then(req => {
            setSeats(req.data);
        });
    }, [idSessao]);

    function sendAffirmation(event) {
        event.preventDefault();

        const requisicao = axios.post("https://mock-api.driven.com.br/api/v8/cineflex/seats/book-many", {
            ids: selectedSeats,
            name: name,
            cpf: cpf,
        });

        requisicao.then(() => {
            // Navegar para a rota /sucesso e passar os dados via state
            navigate("/sucesso", {
                state: {
                    movie: seats.movie,
                    day: seats.day,
                    name: seats.name,
                    seats: selectedSeats.map(id => seats.seats.find(seat => seat.id === id)),
                    buyer: { name, cpf }
                }
            });
        });
    }

    const toggleSeatSelection = (seatId, isAvailable) => {
        if (!isAvailable) {
            alert("Esse assento não está disponível");
            return;
        }

        setSelectedSeats(prevSelected => {
            if (prevSelected.includes(seatId)) {
                return prevSelected.filter(id => id !== seatId);
            } else {
                return [...prevSelected, seatId];
            }
        });
    };

    return (
        <>
            <TitleStyles>Selecione o(s) assento(s)</TitleStyles>
            <Container>
                <SeatsGrid>
                    {seats && seats.seats.map((seatItem) => (
                        <SeatStyled
                            key={seatItem.id}
                            $isAvailable={seatItem.isAvailable}
                            $selected={selectedSeats.includes(seatItem.id)}
                            onClick={() => toggleSeatSelection(seatItem.id, seatItem.isAvailable)}
                        >
                            {seatItem.name}
                        </SeatStyled>
                    ))}
                </SeatsGrid>

                <InputGroup onSubmit={sendAffirmation}>
                    <div>
                        <label htmlFor="seuNome">Nome do comprador(a)</label>
                        <Input
                            type="text"
                            id="seuNome"
                            placeholder="Digite seu nome..."
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div>
                        <label htmlFor="cpf">CPF do comprador(a)</label>
                        <Input
                            type="text"
                            id="cpf"
                            placeholder="Digite seu CPF..."
                            value={cpf}
                            onChange={(e) => setCpf(e.target.value)}
                        />
                    </div>
                    <Button type="submit">Reservar assento(s)</Button>
                </InputGroup>
            </Container>
        </>
    );
}

export default Seat;
