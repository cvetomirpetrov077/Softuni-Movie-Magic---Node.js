import express from "express";
import movieService from "../services/movieService.js";

const homeController = express.Router(); // без new .. така си е с главна буква 

homeController.get('/', (req, res) =>{
const movies = movieService.getAll();

    res.render('home', { movies }); // искам да ти подам обект мовис
})

homeController.get('/about', (req, res) =>{
    res.render('about');
})

export default homeController;
