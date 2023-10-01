


export const getAllMovies  = async ()=>{
    const movivesPromise = await fetch("https://movie-booking-application.onrender.com/mba/api/v1/movies")
    const moviesData =  await movivesPromise.json();
    return moviesData;
}


export const getMovieDetails  = async (id)=>{
    const movieDetailPromise = await fetch(`https://movie-booking-application.onrender.com/mba/api/v1/movies/${id}`)
    const movieDetail =  await movieDetailPromise.json();
    return movieDetail;
}