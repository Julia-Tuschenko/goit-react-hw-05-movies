import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReview } from "../services/moviesApi";
import  { toast }  from  'react-toastify' ; 

const Review = () => {
    const [reviews, setReview] = useState([]);
    const movieId = useParams().movieId;

    useEffect(() => {
        getMovieReview(movieId).then(data => {
            return setReview(data.results)
        })
    }, [movieId])

    return (
        <>
            {reviews.length > 0 ?
            (<ul>
                    {reviews.map(review => {
                        return (
                            <li key={review.id}>
                                <h2>Author : {review.author}</h2>
                                <p>Content : {review.content}</p>
                            </li>
                        )
                    })}
        </ul>)
            : toast.error("No information found", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                })}
        </>
    )

};

export default Review;







// export const Publication = ({ item }) => {
//     return (
//       <article>
//         <h2>{item.title}</h2>
//         <p>{item.text}</p>
//       </article>
//     );
//   };