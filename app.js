import express from 'express';
import Hello from "./hello.js"
import Lab5 from "./Lab5.js";
import cors from "cors";
import CourseRoutes from "./courses/routes.js";
import ModuleRoutes from "./modules/routes.js";
import AssignmentRoutes from "./assignments/routes.js";
import "dotenv/config";
import session from "express-session";


const app = express();
app.use(cors());
app.use(express.json());
AssignmentRoutes(app);
ModuleRoutes(app);
CourseRoutes(app);
Hello(app)
Lab5(app);
app.listen(process.env.PORT || 4000);

/* const express = require('express')
const app = express()
app.get('/hello', (req, res) => {res.send('Life is good!')})
app.get('/', (req, res) => {res.send('Welcome to Full Stack Development!')})
app.listen(4000) */
//app.listen(4000);