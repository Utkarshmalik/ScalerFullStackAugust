import { axiosInstance } from ".";

export async function getAllMovies(){
    try{
         const response = await axiosInstance.get("https://scalerfullstackaugust.onrender.com/movies");

       return response;
    }
    catch(err){
        return err.response;
    }
}


export async function getMovieById(id){
    try{
         const response = await axiosInstance.get(`https://scalerfullstackaugust.onrender.com/movies/${id}`);

       return response;
    }
    catch(err){
        return err.response;
    }
}