// user.provider.js
import { previewReviewResponseDTO } from "../dtos/user.dto";
import { getPreviewReview } from "../models/user.dao";


export const getReviews = async(userId, query) =>{
    const {reviewId, size=3} = query;
    console.log(reviewId, size, userId);
    return previewReviewResponseDTO(await getPreviewReview(reviewId, size, userId))
}