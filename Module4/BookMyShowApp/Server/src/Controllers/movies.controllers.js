
const getAllMovies = (req,res)=>{

    //what logic ? 
    //consume the token 
    //validate the token 
    // if token is correct : move ahead to the actual work 
    // if token is incorrect : send exception to a client 

    return res.send(["movie1","movie2"]);

}

const createNewMovie = (req,res)=>{
    
    return res.send({message:"New Movie Sucessfully created"});
}

module.exports= {
    getAllMovies,
    createNewMovie
}