// temp.route.js

import express from 'express';
import { tempTest, tempException } from '../controllers/temp.controller.js';

export const tempRouter = express.Router();

tempRouter.get('/test', tempTest);

//예외처리 실습
tempRouter.get('/exception/:flag',tempException);