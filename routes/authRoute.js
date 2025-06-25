import express from "express"
import {registerController,loginController,testController, updateProfileController, getAllOrdersController, getOrdersController, orderStatusController} from '../controllers/authController.js'
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";
import { forgotPasswordController } from "../controllers/authController.js";
//router object
const router = express.Router()

//routing
//REGISER || POST METHOD
router.post('/register',registerController);

//LOGIN || POST
router.post('/login',loginController);


//forgot password
router.post('forgot-password',forgotPasswordController)


//test route
router.get('/test',requireSignIn,isAdmin, testController)
//we create the middleware for JWT tokens
//in requireSignIn midddleware the token is checked and second one (isAdmin) the admin is checked

//protected user route auth
router.get("/user-auth",requireSignIn,(req,res)=>{
    res.status(200).send({ok:true});
})

//admin route auth
router.get("/admin-auth",requireSignIn,isAdmin,(req,res)=>{
    res.status(200).send({ok:true});
})

//update profile
router.put('/profile',requireSignIn,updateProfileController);

// //orders
 router.get('/orders',requireSignIn,getOrdersController);

//all orders
router.get("/all-orders",requireSignIn,isAdmin,getAllOrdersController);

// order status update
router.put(
  "/order-status/:orderId",
  requireSignIn,
  isAdmin,
  orderStatusController
);

export default router