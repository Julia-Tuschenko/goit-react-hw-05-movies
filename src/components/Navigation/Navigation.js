import { NavLink } from "react-router-dom";

const Navigation = () => {
    return (
        <nav>
        <NavLink to="/" >HomePage</NavLink>
        <NavLink to="/movies" >MoviesPage</NavLink>
        {/* <Link to="/" >HomePage</Link>
        <Link to="/" >HomePage</Link>
        <Link to="/" >HomePage</Link> */}
    </nav>
    );
};

export default Navigation;

// В додатку повинні бути наступні маршрути. 
//Якщо користувач зайшов по несуществующему маршруту, його необхідно перенаправляти на домашню сторінку.

// '/'- компонент <HomePage>, домашня сторінка зі списком популярних кінофільмів.
// '/movies'- компонент <MoviesPage>, сторінка пошуку фільмів по ключевому слову.
// '/movies/:movieId'- компонент <MovieDetailsPage>, сторінка з детальною інформацією про кінофільм.
// /movies/:movieId/cast- компонент <Cast>, інформація про акторський склад. Рендерится на сторінці <MovieDetailsPage>.
// /movies/:movieId/reviews- компонент <Reviews>, інформація об оглядах. Рендерится на сторінці <MovieDetailsPage>.