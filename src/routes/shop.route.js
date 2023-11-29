// routes/shop.route.js
import express from "express";
import { shopRegister, shopReview } from "../controllers/shop.controller.js";

import asyncHandler from 'express-async-handler';
export const shopRouter = express.Router();

shopRouter.post('/register', asyncHandler(shopRegister));
shopRouter.post('/review', asyncHandler(shopReview));