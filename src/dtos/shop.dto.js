// dtos/shop.dto.js

//register response DTO
export const RegisterResponseDTO = (shop) => {
    console.log("me!!?");
    return {"name": shop[0].name, "description": shop[0].description};
}