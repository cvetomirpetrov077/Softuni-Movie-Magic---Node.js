import express from "express";
import movieService from "../services/movieService.js";
import req from "express/lib/request.js";
import castService from "../services/castService.js";

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

    // get movie with populated casts
    const movie = await movieService.getOne(movieId);

    // Get movie csts
    // const casts = await movieService.getCasts(movieId)

    res.render('movie/details', { movie } );
});

movieController.get('/:movieId/attach', async (req, res) => {
    
    const movieId = req.params.movieId;

    //Get movie by id
    const movie = await movieService.getOne(movieId);

    // Get all casts
    const casts = await castService.getAll();

    // Pass casts to template   
    res.render('movie/attach' , { movie, casts } );
})

movieController.post('/:movieId/attach', async (req, res) => {
   
    // get movie id
    const movieId = req.params.movieId;

    //get cast id
    const castId = req.body.cast;
   
    // Attach cast to movie
    await movieService.attach(movieId, castId);

    // Redirect to movie details page
    res.redirect(`/movies/${movieId}/details`)

});


export default movieController;