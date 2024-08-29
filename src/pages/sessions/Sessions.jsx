import { useEffect, useState } from "react"
import { TitleStyles } from "../../components/Title-styles"
import { useParams } from "react-router-dom";
import axios from "axios";
import { SessionStyled } from "./Sessions-styles";

function Sessions() {
    const { idfilm } = useParams();
    const [sessions, setSessions] = useState(null);

    useEffect(() => {
        const getSessions = axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/movies/${idfilm}/showtimes`)
        getSessions.then(req => { setSessions(req.data) })
    }, [])
    console.log(sessions)

    return (
        <>
            <TitleStyles>Selecione o horário</TitleStyles>

            <SessionStyled>
                <h3>Quinta-feira, 21/03/2024</h3>
                <div>
                    <p>10:00</p>
                    <p>15:00</p>
                    <p>19:00</p>
                    <p>19:00</p>
                </div>
            </SessionStyled>

            <SessionStyled>
                <h3>Quinta-feira, 21/03/2024</h3>
                <div>
                    <p>10:00</p>
                    <p>15:00</p>
                    <p>19:00</p>
                    <p>19:00</p>
                </div>
            </SessionStyled>
            <SessionStyled>
                <h3>Quinta-feira, 21/03/2024</h3>
                <div>
                    <p>10:00</p>
                    <p>15:00</p>
                    <p>19:00</p>
                    <p>19:00</p>
                </div>
            </SessionStyled>
        </>
    )
}

export default Sessions