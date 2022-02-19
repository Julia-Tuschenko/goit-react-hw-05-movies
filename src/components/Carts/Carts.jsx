import { useState, useEffect } from 'react';
import { useParams, useLocation, Link } from 'react-router-dom';
import { getMovieCredits } from "../services/moviesApi";
import { List, Item, Img, Title, BtnControls } from "../GlobalStule/Pages.styled";

const Cast = () => {
    const imgUrl = 'https://image.tmdb.org/t/p/w300';
    const [actors, setActors] = useState([]);
    const location = useLocation();
    const movieId = useParams().movieId;
    const notPhoto = '🤔';

    useEffect(() => {
        getMovieCredits(movieId).then((data) => {
            setActors(data.cast)
        })
    }, [movieId])

    return (
        <>
            <BtnControls type='button'>
                <Link to={location?.state ?? `/movies/${movieId}` }>Hide cast</Link>
            </BtnControls>
            
            {actors && (
                <List>
                    {actors.map(actor => {
                        return (
                            <Item key={actor.id}>
                                <Img src={actor.profile_path? `${imgUrl}${actor.profile_path}`: notPhoto} alt={actor.name} />
                                <Title>name: {actor.name}</Title>
                                <Title>character: {actor.character}</Title>
                            </Item>
                        )
                    } )}
                </List>
        )}
        
        </>
    )

};

export default Cast;