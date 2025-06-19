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
    const { email, password, rePassword } = req.body;
    
    // Register user 
    const token = await userService.register({ email, password, rePassword});
    
    // Set auth cookie
    res.cookie('auth', token);

    // Redirect to login 
    res.redirect('/');
})


userController.get('/login', (req, res) => {
    res.render('user/login');
})

userController.post('/login', async (req, res) => {
    
    // Get login 
    const {email, password} = req.body;

    // call login service
    const token  =  await userService.login(email, password);
    console.log(token)

    // Set auth cookie
    res.cookie('auth', token);

    // redirect homepage
    res.redirect('/')
})

userController.get('/logout', (req, res) => {
    
    res.clearCookie('auth');

    // TODO: Invalidate token

    res.redirect('/');
})

export default userController;