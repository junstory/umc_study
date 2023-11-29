// routes/shop.route.js
import express from "express";
import { shopRegister } from "../controllers/shop.controller.js";

import asyncHandler from 'express-async-handler';
export const shopRouter = express.Router();

shopRouter.post('/register', asyncHandler(shopRegister));