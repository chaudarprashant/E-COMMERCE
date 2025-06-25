import { compare } from "bcrypt";
import userModel from "../models/userModel.js"
import orderModel from "../models/orderModel.js";

import { comparePassword, hashPassword } from "./../helpers/authHelper.js";
import JWT from "jsonwebtoken";


//REGISER
export const registerController = async (req,res) => {
try {
    const {name,email,password,phone,address,answer} = req.body;
    //validation
    if(!name){
        return res.send({error: 'Name is Required'})
    }
    if(!email){
        return res.send({error: 'email is Required'})
    }
    if(!password){
        return res.send({error: 'password is Required'})
    }
    if(!phone){
        return res.send({error: 'phone is Required'})
    }
    if(!address){
        return res.send({error: 'address is Required'})
    }
    if(!answer){
        return res.send({error: 'answer is Required'})
    }
    //cheack user
    const existingUser = await userModel.findOne({email});
    //existing user
    if(existingUser){
        res.status(200).send({
             success:true,
             message:'Alreaady Register plese login'
        })
    }

    //register user
    const hashedPassword = await hashPassword(password);

    const user = await new userModel({
        name,
        email,
        phone,
        address,
        password:hashedPassword,
        answer,
    }).save();

    res.status(201).send({
        success:true,
        message:"User Register Successfullly",
        user,
    });


} catch (error) {
      console.log(error);
      res.status(500).send({
           success:false,
           message:"error in Registration",
           error
      })
}
};

// export default registerController;

//POST LOGIN      
export const loginController = async (req,res) =>{
      try {
         const {email,password} = req.body

         if(!email || !password){
           return res.status(404).send({
                status:false,
                message:'Invalid email and pasword'
            })
         }
         //cheack user
         const user = await userModel.findOne({email});
         if(!user){
            return res.status(404).send({
                success:false,
                message:'Email is not registered'
            })
         }
         const match = await comparePassword(password,user.password)
         if(!match){
            return res.status(200).send({
                success:false,
                message:'Invalid Password'
            })
         }

         //token  JWT
         const token = await JWT.sign({_id:user._id},process.env.JWT_SECRET,{
            expiresIn : "7d",
         })

         res.status(200).send({
            success:true,
            message:"login seccessfully",
            user:{
                name : user.name,
                email:user.email,
                phone:user.phone,
                address:user.address,
                role:user.role,
            },
            token,
         });

      } catch (error) {
          console.log(error);
          res.status(500).send({
            success:false,
            message:'Error in login',
            error
          })
      }
}

//forgotPasswordController
export const forgotPasswordController =async (req,res) =>{
       try {
        const {email,answer,newPassword} = req.body;
        if(!email){
          res.status(400).send({message:'Email is required'})
        }
        if(!answer){
            res.status(400).send({message:'answer  is required'})
          }
          if(!newPassword){
            res.status(400).send({message:'NewPassword is required'})
          }

          //cheack
         const user = await userModel.findOne({email,answer});
         //validation
         if(!user){
            return res.status(404).send({
                success:false,
                message:"wrong Email Or Answer",    
            })
         }
         const hashed = await hashPassword(newPassword);
         await userModel.findByIdUpdate(user._id,{password:hashed})
         res.status(200).send({
            success:true,
            message:"Password Reset Successfully",
         });
       } catch (error) {
           console.log(error)
           res.status(500).send({
            success:false,
            message:'Something went Wrong',
            error
           })
       }
};


//test controller
export const testController = (req,res) =>{
  try {
    res.send("Protectedd route");
  } catch (error) {
      console.log(error);
      res.send({error});
  }
};


//update prfole
export const updateProfileController = async (req, res) => {
    try {
      const { name, email, password, address, phone } = req.body;
      const user = await userModel.findById(req.user._id);
      //password
      if (password && password.length < 6) {
        return res.json({ error: "Passsword is required and 6 character long" });
      }
      const hashedPassword = password ? await hashPassword(password) : undefined;
      const updatedUser = await userModel.findByIdAndUpdate(
        req.user._id,
        {
          name: name || user.name,
          password: hashedPassword || user.password,
          phone: phone || user.phone,
          address: address || user.address,
        },
        { new: true }
      );
      res.status(200).send({
        success: true,
        message: "Profile Updated SUccessfully",
        updatedUser,
      });
    } catch (error) {
      console.log(error);
      res.status(400).send({
        success: false,
        message: "Error WHile Update profile",
        error,
      });
    }
  };

  
//orders
export const getOrdersController = async (req, res) => {
  try {
    const orders = await orderModel
      .find({ buyer: req.user._id })
      .populate("products", "-photo")
      .populate("buyer", "name");
    res.json(orders);
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error WHile Geting Orders",
      error,
    });
  }
};
//orders
export const getAllOrdersController = async (req, res) => {
  try {
    const orders = await orderModel
      .find({})
      .populate("products", "-photo")
      .populate("buyer", "name")
      .sort({ createdAt: "-1" });
    res.json(orders);
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error WHile Geting Orders",
      error,
    });
  }
};

//order status
export const orderStatusController = async (req, res) => {
  try {
    const { orderId } = req.params;
    const { status } = req.body;
    const orders = await orderModel.findByIdAndUpdate(
      orderId,
      { status },
      { new: true }
    );
    res.json(orders);
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error While Updateing Order",
      error,
    });
  }
};