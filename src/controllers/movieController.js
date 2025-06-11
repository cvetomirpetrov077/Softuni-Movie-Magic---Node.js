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

movieController.get('/search', async (req, res) => {

    // Get querystring
    const filter = req.query;

    // get all movies
    const movies = await movieService.getAll(filter);
    res.render('search', { movies , filter});
})

movieController.get('/:movieId/details', async (req, res) => {

    // get movie id from params
    const movieId = req.params.movieId;

    const movie = await movieService.getOne(movieId);
    // console.log(movie);

    res.render('movie/details', { movie } );
});



export default movieController;