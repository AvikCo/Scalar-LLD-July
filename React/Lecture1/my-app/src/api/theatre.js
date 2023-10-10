

export const getTheatresForAMovie  = async (id)=>{
    const theatreDetailsPromise = await fetch(`https://movie-booking-application.onrender.com/mba/api/v1/movies/${id}/theatres`)
    const theatres =  await theatreDetailsPromise.json();
    return theatres;
}
