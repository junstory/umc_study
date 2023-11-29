import { BaseError } from "../../config/error";
import { status } from "../../config/response.status";
import { RegisterResponseDTO } from "../dtos/user.dto"
import { addUser, getUser, getUserPreferToUserID, setPrefer } from "../models/user.dao";

export const joinUser = async (body) => {
    //const birth = new Date(body.birthYear, body.birthMonth, body.birthDay);
    //const prefer = body.prefer;

    const joinUserData = await addUser({
        "email": body.email,
        "name": body.name,
        "nickname":body.nickname,
        "gender": body.gender,
        "birth": body.birth,
        "addr": body.addr,
        "phone": body.phone
        //"prefer": [1,2,5]
    });

    if(joinUserData == -1){
        throw new BaseError(status.EMAIL_ALREADY_EXIST);
    }else{
        // for (let i = 0; i < prefer.length; i++) {
        //     await setPrefer(joinUserData, prefer[i]);
        // }
        return RegisterResponseDTO(await getUser(joinUserData));
    }
}