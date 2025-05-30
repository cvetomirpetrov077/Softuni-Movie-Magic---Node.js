import express from "express";

const homeController = express.Router(); // без new .. така си е с главна буква 

homeController.get('/', (req, res) =>{
    res.render('home');
})

homeController.get('/about', (req, res) =>{
    res.render('about');
})

export default homeController;
