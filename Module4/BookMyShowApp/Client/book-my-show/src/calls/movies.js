import { axiosInstance } from ".";

export async function getAllMovies(){
    try{
         const response = await axiosInstance.get("http://localhost:8000/movies");

       return response;
    }
    catch(err){
        return err.response;
    }
}


export async function getMovieById(id){
    try{
         const response = await axiosInstance.get(`http://localhost:8000/movies/${id}`);

       return response;
    }
    catch(err){
        return err.response;
    }
}