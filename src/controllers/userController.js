import { log } from "console";
import { Router } from "express";
import userService from "../services/userService.js";

const userController =  Router();

// Action

userController.get('/register', (req, res) => {
    
    res.render('user/register');
})

userController.post('/register', async (req, res) => {

    // Get data form request
    // const { email, password, rePassword }= req.body;
    const userData = req.body;
    
    // Register user 
    await userService.register(userData);

    // Redirect to login 

    res.redirect('/users/login');
})


export default userController;