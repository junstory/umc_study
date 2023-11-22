// temp.service.js

import { status } from '../../config/response.status.js';
import { BaseError } from "../../config/error";
import { tempResponseDTO, flagResponseDTO } from "../dtos/temp.response.dto";

export const getTempData = () => {
    return tempResponseDTO("This is TEST! >.0");
}

export function CheckFlag(flag){
    if(flag == 1)
        throw new BaseError(status.BAD_REQUEST);
    else{
        return flagResponseDTO(flag);
    }
}