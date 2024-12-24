const TheatreModel = require("../Models/Theatre.model");


const createTheatre = async (req,res)=>{

    const theatreDetails = req.body;
    theatreDetails.owner = req.userDetails._id;

    try{

        const newTheatre = new TheatreModel(theatreDetails);
        await newTheatre.save();


        return res.status(201).send({
            success:true,
            message:"New Theatre has been added Successfully"
        })

    }catch(err){
        return res.status(500).send({message:"Internal Server Error",err});
    }


}

const getAllTheatres = async (req,res)=>{

     try{

        const allTheatres = await TheatreModel.find({}).populate("owner");

        return res.status(200).send({
            success:true,
            message:"New Theatre has been fetched Successfully",
            data:allTheatres
        })

    }catch(err){
        return res.status(500).send({message:"Internal Server Error",err});
    }

}

module.exports = {
    createTheatre,
    getAllTheatres
}