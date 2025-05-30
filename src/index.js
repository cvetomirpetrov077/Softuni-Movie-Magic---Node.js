
import express from "express";
import handlebars from "express-handlebars";
import homeController from "./controllers/homeController.js";

// init express instance
const app = express();

// Add static middleware 

app.use(express.static('./src/public'));

// Add and config view engine
app.engine('hbs', handlebars.engine({
    extname: 'hbs',
}))

// Set default engine
app.set('view engine', 'hbs');

// Setdefault view folder
app.set('views', './src/views')

// Config routes

app.use(homeController);


app.listen(5000, () => console.log('Server is listening on http://localhost:5000...'));