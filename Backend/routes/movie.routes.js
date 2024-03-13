const express = require('express');
const { getmovies } = require('../controllers/movies.controller');
const router = express.Router();

router.get('/getMovie',getmovies)

module.exports=router
