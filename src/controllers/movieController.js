import express from "express";

const movieController = express.Router();

movieController.get('/create', (req, res) => { // от индекса от апп.усе взима мовиес и ще е мовиес/креате
    res.render('create') 
})

movieController.post('/create', (req, res) => {
    
    const newMovie = req.body;

    // Save movie

    // Redirect to home page

    res.end();
})

export default movieController;