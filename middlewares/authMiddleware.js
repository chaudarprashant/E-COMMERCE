import JWT from "jsonwebtoken";
import userModel from "../models/userModel.js";


// Protected routes token-based authentication
export const requireSignIn = async (req,res,next)=>{
   try {
      // Decrypt and verify JWT token
      const decode = JWT.verify(
        req.headers.authorization,// Extract token from request headers
        process.env.JWT_SECRET// Use the secret key stored in environment variables
      );
      //decrypt
      req.user = decode;
      next();
      
   } catch (error) {
        console.log(error);
   }
};

// to provide admin access only admin panel using its role is 1
//admin acceess
export const isAdmin = async (req,res,next)=>{
   try {
      const user = await userModel.findById(req.user._id);
      if(user.role !== 1){
         return res.status(401).send({
            success:false,
            message:"UnAuthorized Access",
         });
      }else{
         next();
      }
      
   } catch (error) {
      console.log(error);
      res.status(401).send({
         success:false,
         error,
         message:"Error in admin middleware",
      });
   }
}