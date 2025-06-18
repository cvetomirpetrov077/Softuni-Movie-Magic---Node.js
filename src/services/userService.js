import { error } from "console";
import User from "../models/User.js"
import bcrypt from 'bcrypt'

export default {
    register(userData){
        return User.create(userData);
    },
     async login(email, password){
        // get user form database

        const user = await User.find({email});

        // check if use rxists in DB 

        if(!user){
            return new Error('No such user!');
        }

        // Validate password 
        const isValid = await bcrypt.compare(password, user.password);
        // първото е паролата която пристинга от логин
        // user.password е вече хешираната парола 

        // Return error if not 

        if(!isValid){
            return new Error('Invalid password');
        }

        // if valid - generate token 

        // return token 

        return '';
    },
}