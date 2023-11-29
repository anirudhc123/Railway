import  express  from "express";
import UserRouter from "./Routers/userRouter.js"
import AdminRouter from "./Routers/adminRouters.js"



const app=express();
app.use('/',UserRouter);
app.use('/admin',AdminRouter);


app.listen(5000);