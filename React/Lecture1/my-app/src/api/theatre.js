const BASE_URL = process.env.REACT_APP_BACKEND_URL


export const getTheatresForAMovie  = async (id)=>{
    const theatreDetailsPromise = await fetch(`${BASE_URL}/mba/api/v1/movies/${id}/theatres`)
    const theatres =  await theatreDetailsPromise.json();
    return theatres;
}
