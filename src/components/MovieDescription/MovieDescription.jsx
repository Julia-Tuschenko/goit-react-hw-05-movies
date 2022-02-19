const MovieDescription = ({movie}) => {
    const imgUrl = 'https://image.tmdb.org/t/p/original';
    const notMovieImg = '🤔';
    return (
        <>
        <div>
            <img src={movie.backdrop_path? `${imgUrl}${movie.backdrop_path}`: notMovieImg} alt={movie.title} />
            </div>
            <div>
                <h2>{movie.original_title}</h2>
            </div>
        </>
    )

};

export default MovieDescription;