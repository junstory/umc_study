import { BaseError } from "../../config/error";
import { status } from "../../config/response.status";
import { RegisterResponseDTO, ReviewResponseDTO } from "../dtos/shop.dto"
import { addShop, getShop, addReview, getReview} from "../models/shop.dao";

export const joinShop = async (body) => {
    const joinShopData = await addShop({
        "name" : body.name,
        "description" : body.description,
        "address" : body.address,
        "phone_num" : body.phone_num,
        "regionId": body.regionId
    });

    if(joinShopData == -1){
        throw new BaseError(status.SHOP_ALREADY_EXIST);
    }else{
        return RegisterResponseDTO(await getShop(joinShopData));
    }
}

export const joinReview = async (body) => {
    const joinReviewData = await addReview({
        "member_id" : body.member_id,
        "shop_id" : body.shop_id,
        "description" : body.description,
        "rating" : body.rating,
    });

    if(joinReviewData == -1){
        throw new BaseError(status.SHOP_NOT_EXIST);
    }else{
        return ReviewResponseDTO(await getReview(joinReviewData));
    }
}