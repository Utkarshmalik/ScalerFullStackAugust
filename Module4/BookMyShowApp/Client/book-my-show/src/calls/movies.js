import { axiosInstance } from ".";

export async function getAllMovies(){
    console.log("Make an API call with data");

    try{
         const response = await axiosInstance.get("http://localhost:8000/movies");

       return response;
    }
    catch(err){
        return err.response;
    }
}