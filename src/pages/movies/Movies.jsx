import { useEffect, useState } from "react";
import { TitleStyles } from "../../components/Title-styles";
import axios from "axios";


function Movies() {
    const [films, setFilms] = useState(null);

    useEffect(() => {
        const getFilms = axios.get("https://mock-api.driven.com.br/api/v8/cineflex/movies")
        getFilms.then(req => { setFilms(req.data) })
    }, [])

    console.log(`Films =>>>>> ${films}`)

    return (
        <>
            <TitleStyles>Em cartaz</TitleStyles>

            {films ? (
                <ul>
                    {films.map((film) => (
                        <li key={film.id}>
                            <img src={film.posterURL} alt={film.title} />
                        </li>
                    ))}
                </ul>
            ) : null}

        </>


    )
}

export default Movies