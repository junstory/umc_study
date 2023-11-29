//user.service.js
import { BaseError } from "../../config/error";
import { status } from "../../config/response.status";
import { RegisterResponseDTO, MissionResponseDTO } from "../dtos/user.dto"
import { addUser, getUser, addMission, getMission} from "../models/user.dao";

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

export const joinMission = async(body) =>{
    const joinMissionData = await addMission({
        "member_id" : body.member_id,
        "mission_id": body.mission_id
    })

    if(joinMissionData == -1){
        throw new BaseError(status.MISSION_ALREADY_EXIST);
    }else{
        return MissionResponseDTO(await getMission(joinMissionData));
    }
}
//MISSION_ALREADY_EXIST: {status: StatusCodes.BAD_REQUEST, "isSuccess": false, "code": "SHOP4001", "message": "이미 도전중인 미션입니다."},