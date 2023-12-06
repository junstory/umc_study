// routes/shop.route.js
import express from "express";
import { shopRegister, shopReview, reviewPreview, missionPreview } from "../controllers/shop.controller.js";

import asyncHandler from 'express-async-handler';
export const shopRouter = express.Router({mergeParams:true});

shopRouter.post('/register', asyncHandler(shopRegister));
shopRouter.post('/review', asyncHandler(shopReview));
shopRouter.get('/reviews', asyncHandler(reviewPreview));
shopRouter.get('/:shopId/missions', asyncHandler(missionPreview));