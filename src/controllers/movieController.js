import express from "express";
import movieService from "../services/movieService.js";

const movieController = express.Router();

movieController.get('/create', (req, res) => { // от индекса от апп.усе взима мовиес и ще е мовиес/креате
    res.render('create') 
})

movieController.post('/create', async (req, res) => {
    
    const newMovie = req.body;
 
    // Save movie
    await movieService.create(newMovie);

    // Redirect to home page
    res.redirect('/')
})

movieController.get('/search', (req, res) => {

    // Get querystring
    const filter = req.query;

    // get all movies
    const movies = movieService.getAll(filter);
    res.render('search', { movies , filter});
})

movieController.get('/:movieId/details', (req, res) => {

    // get movie id from params
    const movieId = req.params.movieId;

    const movie = movieService.getOne(movieId);
    // console.log(movie);

    res.render('details', { movie } );
});



export default movieController;