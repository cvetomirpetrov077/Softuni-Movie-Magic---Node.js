import { model, Schema, Types } from "mongoose";
import { type } from "os";

const maxYearAllowed =  new Date().getFullYear() + 5;

const movieSchema = new Schema({
    title:{
        type: String,
        required : [ true, 'Title is requiered'],
    },
    category :{
        type: String,
        required :[ true, 'Category is requiered'],
    },
    genre:{
        type: String,
        required :[ true, 'Genre is requiered'],
        lowercase: true, // Not a validator but a sanitizier 
    },
    director:{
        type: String,
        required :[ true, 'Director is requiered'],
    },
    year:{
        type: Number,
        required :[ true, 'Year is requiered'],
        min: 1970,
        max: [maxYearAllowed , `Year can't be larger then ${maxYearAllowed}`],
    },
    imageUrl:{
        type: String,
        required : true
    },
    rating:{
        type: Number,
        required : [ true ,'Rating is requiered' ],
        min: [ 1 , 'Rating should  not be less than 1'],
        max: [ 10 , 'Rating should not be higher than 10']
    },
   description:{
        type: String,
        required : [ true, 'Description is required'],
        maxLength: [1000, 'Description is too long!'],
    },
                    // Релация.. свързване  на модела мови
    casts:  [{
        type: Types.ObjectId,
        ref: 'Cast',
    }],
    owner: {
        type: Types.ObjectId,
        reg: 'User',
    }
});

const Movie = model('Movie', movieSchema);

export default Movie;

// import fs from 'node:fs/promises';
// import {v4 as uuid} from 'uuid';

// const moviesJSON = await fs.readFile('./src/database.json');
// export const movies = JSON.parse(moviesJSON);

// console.log(movies);

// export default class Movie {

//     constructor(data){
//         this.data = data;
//     }

//    async save(){

//        this.data.id = uuid();
//        this.data.rating = Number(this.data.rating);
       
//        movies.push(this.data);

//        await fs.writeFile('./src/database.json', JSON.stringify(movies, null, 4)); 

//        return this.data;
//    }
// }
