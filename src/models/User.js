import { Schema, model } from "mongoose";
import { type } from "os";

const userSchema =  new Schema({

    email: {
        type: String,
        required: true,
    },
    password : {
        type: String, 
        required: true,
    }
})

const User = model('User', userSchema);

export default User ;