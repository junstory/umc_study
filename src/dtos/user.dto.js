// dtos/user.dto.js

// Register response DTO
export const RegisterResponseDTO = (user) => {

    return {"email": user[0].login_id, "name": user[0].name};
}

export const MissionResponseDTO = (mission) =>{
    return {"mission_id": mission[0].mission_id, "member_id": mission[0].member_id};
}