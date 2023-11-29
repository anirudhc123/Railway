import express, { Router } from "express"
import { admintable } from "../Fuctions/adminFunction";
const Router2=express.Router();

Router.post('/admin',admintable)

export default Router2;