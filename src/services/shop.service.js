import { BaseError } from "../../config/error";
import { status } from "../../config/response.status";
import { RegisterResponseDTO } from "../dtos/shop.dto"
import { addShop, getShop} from "../models/shop.dao";

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