//user.controller.js
import { response } from "../../config/response.js";
import { status } from "../../config/response.status.js";

import { joinUser, joinMission } from "../services/user.service.js";

export const userRegister = async (req, res, next) => {
    console.log("회원가입을 요청하였습니다!");
    //console.log("body:", req.body); // 값이 잘 들어오나 찍어보기 위한 테스트용

    res.send(response(status.SUCCESS, await joinUser(req.body)));
}

export const userMission = async (req,res,next) =>{
    console.log("미션을 도전합니다!");
    res.send(response(status.SUCCESS, await joinMission(req.body)));
}