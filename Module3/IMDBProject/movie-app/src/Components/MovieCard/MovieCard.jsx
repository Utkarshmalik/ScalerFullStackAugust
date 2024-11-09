

function MovieCard(props){

    const {movieObj}  = props;
    let moviePoster =  movieObj.backdrop_path;
    let movieTitle = movieObj.title;
    const moviePosterUrl = `url(https://image.tmdb.org/t/p/original/${moviePoster})`;

    return <div className="h-[40vh] w-[200px] bg-cover bg-center rounded-xl flex flex-col justify-end "
    style={{backgroundImage:moviePosterUrl}} >

        <div className="text-xl text-white bg-gray-900 bg-opacity-60" >
            {movieTitle}
        </div>


    </div>

}

export default MovieCard;