
import express from "express";
import handlebars from "express-handlebars";
import mongoose from "mongoose";
import homeController from "./controllers/homeController.js";
import movieController from "./controllers/movieController.js";
import castController from "./controllers/castController.js";
import userController from "./controllers/userController.js";

// init express instance
const app = express();

// Add static middleware 
app.use(express.static('./src/public'));

// Add body parser
app.use(express.urlencoded());

// Add and config view engine
app.engine('hbs', handlebars.engine({
    extname: 'hbs',
    helpers: {
        showRating(rating){
            return '★'.repeat(Math.floor(rating));
        }
    },

    // Allow handlebars to use prototype methods and properties of the mongoose document
    runtimeOptions: {
        allowProtoMethodsByDefault: true,
        allowProtoPropertiesByDefault: true,
    }
}))

// connect to db

try {
    mongoose.connect('mongodb://localhost:27017', {dbName: 'magic-movies-may2025'});    
    console.log('Succesfully connected to DB!');
} catch (error) {
    console.log('Cannot connect to DB!!!')
    console.log(error.message);
}





// Set default engine
app.set('view engine', 'hbs');

// Setdefault view folder
app.set('views', './src/views')

// Config routes
app.use(homeController);
app.use('/movies', movieController);
app.use('/casts', castController);
app.use('/users', userController);
app.all('*url', (req, res) => {
    res.render('404'); 
})


app.listen(5000, () => console.log('Server is listening on http://localhost:5000...'));