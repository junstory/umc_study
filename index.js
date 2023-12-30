//index.js
// const express = require('express')   // common JS
import express from 'express'          // ES6
import { tempRouter } from './src/routes/temp.route';
import { response } from './config/response';
import { status } from './config/response.status';
import { BaseError } from './config/error';
import { userRouter } from './src/routes/user.route.js';
import { shopRouter } from './src/routes/shop.route.js';

import { specs } from './config/swagger.config.js';
import SwaggerUi from 'swagger-ui-express';

import dotenv from 'dotenv';
dotenv.config();

const app = express()
const port = 3000
// server setting - veiw, static, body-parser etc..
app.set('port', process.env.PORT || 3000)   // 서버 포트 지정
//app.use(cors());                            // cors 방식 허용
app.use(express.static('public'));          // 정적 파일 접근
app.use(express.json());                    // request의 본문을 json으로 해석할 수 있도록 함 (JSON 형태의 요청 body를 파싱하기 위함)
app.use(express.urlencoded({extended: false})); // 단순 객체 문자열 형태로 본문 데이터 해석


// const myLogger = (req,res,next) => {
//     console.log("LOGGED");
//     next();
// }

// app.use(myLogger);

// swagger
app.use('/api-docs', SwaggerUi.serve, SwaggerUi.setup(specs));
//temp router 세팅
app.use('/temp', tempRouter);
app.use('/user', userRouter);
app.use('/shop', shopRouter);
app.use('/:shopId', shopRouter);



app.get('/', function (req, res) {
    console.log("/");
    res.send('Hello UMC!')
})


app.get('/hello', function (req, res) {
    console.log("/hello");
    res.send('Hello World')
})
app.get('/healthchecker', function (req, res) {
    console.log("/");
    res.send('Hello UMC!')
})

//temp error handling
app.use((req,res,next)=>{
    const err = new BaseError(status.NOT_FOUND);
    next(err);
})

app.use((err, req, res, next) => {
    // 템플릿 엔진 변수 설정
    res.locals.message = err.message;   
    // 개발환경이면 에러를 출력하고 아니면 출력하지 않기
    res.locals.error = process.env.NODE_ENV !== 'production' ? err : {}; 
    console.log(err.data.status);
    res.status(err.data.status).send(response(err.data));
});



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})