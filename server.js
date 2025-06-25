import express from "express"
import colors from "colors"
import dotenv from "dotenv"
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoute from "./routes/authRoute.js"
import categoryRoutes from './routes/categoryRoutes.js'
import productRoutes from './routes/productRoutes.js'

//configure env
dotenv.config();

//connect db
connectDB();

//male instance of expreess
const app = express();

//middleware
app.use(express.json());
app.use(morgan('dev'));

//routes
 app.use("/api/v1/auth",authRoute);
 app.use("/api/v1/category",categoryRoutes);
app.use("/api/v1/product",productRoutes);

//rest api
app.get('/',(req,res)=>{
    res.send("hay boy");
})


const PORT = process.env.PORT || 8080; 

app.listen(PORT,()=>{
    console.log(`The Server is Running on port ${PORT}`.bgCyan.white);
});