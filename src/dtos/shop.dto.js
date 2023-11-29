// dtos/shop.dto.js

//register response DTO
export const RegisterResponseDTO = (shop) => {
    return {"name": shop[0].name, "description": shop[0].description};
}

export const ReviewResponseDTO = (review) => {
    return {"description": review[0].description, "rating": review[0].rating};
}