import { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navigation from "../Navigation/Navigation";
import Cast from "../Carts/Carts";
import Review from "../Review/Review";
import { GlobalStyle } from "../GlobalStule/GlobalStyle";
import { Wrapper } from "./App.styled";
import { Loader } from '../Loader/Loader';

const HomePage = lazy(() => import('../pages/HomePage'));
const MoviesPage = lazy(() => import('../pages/MoviesPage'));
const MovieDetailsPage = lazy(() => import('../pages/MovieDetailsPage'));

export const App = () => {
  return (
    <Suspense fallback={<Loader/>}>
    <Wrapper>
      <GlobalStyle/>
      <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/movies" element={<MoviesPage />} />
          <Route path="/movies/:movieId" element={<MovieDetailsPage />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Review />} />
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      </Wrapper>
      </Suspense>
  )
};





// export const App = () => {
//   return (
//     <Routes>
//       <Route path="/" element={<HomePage />}>
//         <Route path="movies" element={<MoviesPage />} />
//         <Route path="movies/:movieId" element={<MovieDetailsPage/>}>
//         <Route path="movies/:movieId/cast" element={<Cast/>}/>
//         <Route path="movies/:movieId/reviews" element={<Review />}/>
//         </Route>
//         <Route path="*" element={<Navigate to="/" />} />
//       </Route>
//     </Routes>
//   );
// }


// / '/'- компонент <HomePage>, домашня сторінка зі списком популярних кінофільмів.
// '/movies'- компонент <MoviesPage>, сторінка пошуку фільмів по ключевому слову.
// '/movies/:movieId'- компонент <MovieDetailsPage>, сторінка з детальною інформацією про кінофільм.
// /movies/:movieId/cast- компонент <Cast>, інформація про акторський склад. Рендерится на сторінці <MovieDetailsPage>.
// /movies/:movieId/reviews- компонент <Reviews>, інформація об оглядах. Рендерится на сторінці <MovieDetailsPage>.
