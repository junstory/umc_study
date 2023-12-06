//shop.provider.js
import { previewReviewResponseDTO, previewMissionResponseDTO } from "../dtos/shop.dto";
import { getPreviewReview, getPreviewMission } from "../models/shop.dao.js";
export const getReview = async (shopId, query) => {
    const {reviewId, size = 3} = query;
    console.log("START");
    console.log(reviewId, size, shopId);
    return previewReviewResponseDTO(await getPreviewReview(reviewId, size, shopId));
}

export const getMission = async (shopId, query) => {
    const {reviewId, size = 3} = query;
    console.log(reviewId, size, shopId);
    return previewMissionResponseDTO(await getPreviewMission(reviewId, size, shopId));
}