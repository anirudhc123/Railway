import express  from "express";
import {usertable} from "../Fuctions/userFuctions.js";

const Routers=express.Router();
Routers.post('/user',usertable)


export default Routers;