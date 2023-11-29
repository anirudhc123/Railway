import pool from "../Model/userModel.js";
//import  express  from "express";

//const expressJwt=express.expressJwt();
 export const usertable=async (req, res) => {
    const { UserName, password } = req.body;
  
    if (!UserName || !password) {
      return res.status(400).send('Username and password are required');
    }
  
    try {
      const [rows] = await pool.query('SELECT * FROM user2 WHERE UserName = ? AND password = ?', [UserName, password]);
  
      if (rows.length > 0) {
        req.session.userId = rows[0].id;
        return res.redirect('/dashboard');
      } else {
        return res.status(401).send('Invalid username or password');
      }
    } catch (error) {
      console.error('Error querying database:', error.message);
      return res.status(500).send('Internal Server Error');
    }
  }
  