import { useState, useEffect } from 'react';
import { useParams, NavLink, Outlet, Link, useLocation, } from 'react-router-dom';
import { getMovieDetails } from "../services/moviesApi";
import MovieDescription from "../MovieDescription/MovieDescription";
import { BtnControls } from "../GlobalStule/Pages.styled";

const MovieDetailsPage = () => {

    const [movie, setMovie] = useState(false);
    const { movieId } = useParams();
    const location = useLocation();
    
    useEffect(() => {
    getMovieDetails(movieId).then(( data ) => {
      return setMovie(data);
    });
    }, [movieId]);
    
    return (
        <>
            <BtnControls type='button'>
                <Link to={location?.state ?? '/'}>Go back</Link>
            </BtnControls>
            {movie && (
                <>
                    <MovieDescription movie={movie} />
                    <h2>Additional information</h2>
            <ul>
              <li>
                <NavLink to="cast">Cast </NavLink>
              </li>
              <li>
                <NavLink to="reviews">Reviews </NavLink>
              </li>
            </ul>
            <Outlet/>
                </>
            )}
        </>
    )
};

export default MovieDetailsPage;