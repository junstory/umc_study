//shop.controller.js
import { response } from "../../config/response.js";
import { status } from "../../config/response.status.js";

import { joinShop, joinReview } from "../services/shop.service.js";
import { getReview, getMission } from "../providers/shop.provider.js";

export const shopRegister = async (req, res, next) => {
    console.log("가게 등록을 요청하였습니다!");
    console.log("body:", req.body);

    res.send(response(status.SUCCESS, await joinShop(req.body)));
}

export const shopReview = async (req, res, next) => {
    console.log("가게 리뷰를 등록합니다!");
    console.log("body:", req.body);

    res.send(response(status.SUCCESS, await joinReview(req.body)));
}

export const reviewPreview = async (req, res, next) => {
    return res.send(response(status.SUCCESS, await getReview(req.params.shopId, req.query)));
}

export const missionPreview = async (req, res, next) => {
    return res.send(response(status.SUCCESS, await getMission(req.params.shopId, req.query)));
}