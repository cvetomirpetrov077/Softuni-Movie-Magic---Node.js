import { Schema, model } from "mongoose";
import { type } from "os";
import bcrypt from 'bcrypt';

const userSchema =  new Schema({

    email: {
        type: String,
        required: true,
    },
    password : {
        type: String, 
        required: true,
    },
    rePassword: {
        type: String, 
        required: true,
    },
})

userSchema.pre('save', async function (){
    // const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, 10); // десет рунда без салт.. салт се генерира автоматично от бикрипт
});

const User = model('User', userSchema);

export default User ;