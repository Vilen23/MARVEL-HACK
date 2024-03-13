const { default: axios } = require("axios");

const getmovies = async(req,res)=>{
    const {limit,title } = req.body;
    const movies = await axios.get(`https://mcuapi.herokuapp.com/api/v1/movies?page=1&limit=${limit}&columns=title%2Crelease_date%2Cphase%2Ccover_url%2Ctrailer_url&order=chronology%2CDESC&filter=title%3D${title}`)
    if(movies.data.length === 0){
        return res.status(404).json({message: "No movies found"})
    }
    res.status(200).json(movies.data)
}
module.exports = {getmovies}