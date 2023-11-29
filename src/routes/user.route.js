// routes/user.route.js
import express from "express";
import { userRegister, userMission } from "../controllers/user.controller.js";

import asyncHandler from 'express-async-handler';
export const userRouter = express.Router();

userRouter.post('/register', asyncHandler(userRegister));
userRouter.post('/mission', asyncHandler(userMission));