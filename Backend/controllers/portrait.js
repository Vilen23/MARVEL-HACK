const { default: axios } = require("axios");

const getport = async (req, res) => {
    const {key}  = req.params;
    console.log(key)
    const portrait = await axios.get(`https://www.superheroapi.com/api.php/922101543253014/search/${key}`)
    res.status(200).json(portrait.data.results[0].image.url)
}

module.exports = { getport }