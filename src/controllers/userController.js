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
    await userService.register({ email, password, rePassword});

    // Redirect to login 

    res.redirect('/users/login');
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

    // TODO: set auth cookie  result 

    // redirect homepage
    res.redirect('/')

})

export default userController;