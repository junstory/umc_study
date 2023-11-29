// routes/user.route.js
import express from "express";
import { userRegister } from "../controllers/user.controller.js";

import asyncHandler from 'express-async-handler';
export const userRouter = express.Router();

userRouter.post('/register', asyncHandler(userRegister));