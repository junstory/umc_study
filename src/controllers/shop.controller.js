import { response } from "../../config/response.js";
import { status } from "../../config/response.status.js";

import { joinShop } from "../services/shop.service.js";

export const shopRegister = async (req, res, next) => {
    console.log("가게 등록을 요청하였습니다!");
    console.log("body:", req.body);

    res.send(response(status.SUCCESS, await joinShop(req.body)));
}