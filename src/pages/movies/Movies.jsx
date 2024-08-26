import { useEffect, useState } from "react";
import { TitleStyles } from "../../components/Title-styles";
import axios from "axios";
import { ContainerMoviesStyled, ImgStyled } from "./Movies-styles";


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
                <ContainerMoviesStyled>
                    {films.map((film) => (
                        <li key={film.id}>
                            <ImgStyled src={film.posterURL} alt={film.title} />
                        </li>
                    ))}
                </ContainerMoviesStyled>
            ) : null}

        </>


    )
}

export default Movies