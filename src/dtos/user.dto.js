// dtos/user.dto.js

// Register response DTO
export const RegisterResponseDTO = (user) => {
    console.log("DTO성공");
    console.log(user[0]);
    return {"email": user[0].login_id, "name": user[0].name};
}