// user.provider.js
import { previewReviewResponseDTO, previewMissionResponseDTO } from "../dtos/user.dto";
import { getPreviewReview, getPreviewMission } from "../models/user.dao";


export const getReviews = async(userId, query) =>{
    const {reviewId, size=3} = query;
    console.log(reviewId, size, userId);
    return previewReviewResponseDTO(await getPreviewReview(reviewId, size, userId))
}

export const getMissions = async(userId, query) =>{
    const {reviewId, size=3} = query;
    console.log(reviewId, size, userId);
    return previewMissionResponseDTO(await getPreviewMission(reviewId, size, userId))
}