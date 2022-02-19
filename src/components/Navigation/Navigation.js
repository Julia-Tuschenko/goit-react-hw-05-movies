import { Nav, Link } from "./Navigation.styled";
import { Toaster } from 'react-hot-toast';

function Navigation() {
    return (
        <header>
            <Nav>
                <Link to="/">Home</Link>
                <Link to="/movies">Movies</Link>
            </Nav>
            <Toaster />
        </header>
 )   
}

export default Navigation;










// import { NavLink } from "react-router-dom";
// import styled from 'styled-components';

// const Link = styled(NavLink)`
//     &.active{
//         color: blueviolet;
//     }
// `;

// const Nav = styled.nav`
//     display: flex;
//     gap:20px;
//     padding: 12px;
//     text-decoration: none;
//     font-weight: 500;
//     color: black;
//     font-size: 18px;
// `



// const Navigation = () => {
//     return (
//         <Nav >
//         <Link to="/" >HomePage</Link>
//         <Link to="/movies">MoviesPage</Link>
//         {/* <Link to="/movies/:movieId'" >MovieDetailsPage</Link> */}
//         {/* <Link to="/movies/:movieId/cast" >Cast</Link>
//         <Link to="/movies/:movieId/reviews" >Reviews</Link> */}
//     </Nav >
//     );
// };

// export default Navigation;

// className={isActive =>
//     "nav-link" + (!isActive ? " unselected" : "")
//   }

//className={(navData) => (navData.isActive ? "active-style" : 'none')}

// В додатку повинні бути наступні маршрути. 
//Якщо користувач зайшов по несуществующему маршруту, його необхідно перенаправляти на домашню сторінку.

// '/'- компонент <HomePage>, домашня сторінка зі списком популярних кінофільмів.
// '/movies'- компонент <MoviesPage>, сторінка пошуку фільмів по ключевому слову.
// '/movies/:movieId'- компонент <MovieDetailsPage>, сторінка з детальною інформацією про кінофільм.
// /movies/:movieId/cast- компонент <Cast>, інформація про акторський склад. Рендерится на сторінці <MovieDetailsPage>.
// /movies/:movieId/reviews- компонент <Reviews>, інформація об оглядах. Рендерится на сторінці <MovieDetailsPage>.