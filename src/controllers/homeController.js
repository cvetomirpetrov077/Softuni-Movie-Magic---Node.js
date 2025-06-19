import express from "express";
import movieService from "../services/movieService.js";
import { validate } from "uuid";

const homeController = express.Router(); // без new .. така си е с главна буква 

homeController.get('/', async (req, res) =>{
const movies = await movieService.getAll();

    // Get cookie token
    const authToken = req.cookies['auth'];
    console.log(authToken);

    // validate token

    // error handling 

    res.render('home', { movies }); // искам да ти подам обект мовис
})

homeController.get('/about', (req, res) =>{
    res.render('about');
})

export default homeController;
