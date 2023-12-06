// routes/user.route.js
import express from "express";
import { userRegister, userMission,userReviews } from "../controllers/user.controller.js";

import asyncHandler from 'express-async-handler';
export const userRouter = express.Router({mergeParams:true});

userRouter.post('/register', asyncHandler(userRegister));
userRouter.post('/mission', asyncHandler(userMission));
userRouter.get('/:userId/reviews', asyncHandler(userReviews));