import { axiosInstance } from ".";

export async function getShowsForAMovie(movieId,date){
    try{
         const response = await axiosInstance
         .get(`https://scalerfullstackaugust.onrender.com/movies/${movieId}/shows?date=${date}`);

       return response;
    }
    catch(err){
        return err.response;
    }
}

export async function getShowDetails(showId){
    try{
         const response = await axiosInstance
         .get(`https://scalerfullstackaugust.onrender.com/shows/${showId}`);

       return response;
    }
    catch(err){
        return err.response;
    }
}




