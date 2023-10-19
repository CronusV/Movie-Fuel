import { useParams, useNavigate } from "react-router-dom";

function MoviePage(){
    let movieID = useParams();
    return(
        <>
        <h1>{String(movieID.tmdb_id)}</h1>
        </>
    )
}
export default MoviePage