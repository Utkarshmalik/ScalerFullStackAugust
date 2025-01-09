import { axiosInstance } from ".";

export async function getShowsForAMovie(movieId,date){
    try{
         const response = await axiosInstance
         .get(`http://localhost:8000/movies/${movieId}/shows?date=${date}`);

       return response;
    }
    catch(err){
        return err.response;
    }
}

export async function getShowDetails(showId){
    try{
         const response = await axiosInstance
         .get(`http://localhost:8000/shows/${showId}`);

       return response;
    }
    catch(err){
        return err.response;
    }
}




