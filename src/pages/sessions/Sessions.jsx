import { useEffect, useState } from "react"
import { TitleStyles } from "../../components/Title-styles"
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { SessionStyled } from "./Sessions-styles";

function Sessions() {
    const { idfilm } = useParams();
    const [sessions, setSessions] = useState(null);

    useEffect(() => {
        const getSessions = axios.get(`https://mock-api.driven.com.br/api/v8/cineflex/movies/${idfilm}/showtimes`)
        getSessions.then(req => { setSessions(req.data) })
    }, [])

    return (
        <>
            <TitleStyles>Selecione o horário</TitleStyles>

            {sessions && sessions.days.map(day => (
                <SessionStyled key={day.id}>
                    <h3>{day.weekday}, {day.date}</h3>
                    <div>
                        {day.showtimes.map(showtime => (
                            <Link key={showtime.id} to={`/assentos/${showtime.id}`}>
                                <p >{showtime.name}</p>
                            </Link>
                        ))}
                    </div>
                </SessionStyled>
            ))}
        </>
    )
}

export default Sessions