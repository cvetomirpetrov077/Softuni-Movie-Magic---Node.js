import bcrypt from 'bcrypt'
import jsonwebtoken from "jsonwebtoken";

import User from "../models/User.js"
import { jwSecret } from "../config/general.js";

export default {
    register(userData){
        return User.create(userData);
    },
     async login(email, password){
        // get user form database

        const user = await User.findOne({email});

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
        const payload = {
                id: user.id,
                email: user.email,
        };
        
        const token  = jsonwebtoken.sign(payload, jwSecret, {expiresIn: '2h'});

        // return token 
        return token;
    },
}