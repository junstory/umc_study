//shop.provider.js
import { previewReviewResponseDTO } from "../dtos/shop.dto";
import { getPreviewReview } from "../models/shop.dao";
export const getReview = async (shopId, query) => {
    const {reviewId, size = 3} = query;
    console.log("START");
    console.log(reviewId, size, shopId);
    return previewReviewResponseDTO(await getPreviewReview(reviewId, size, storeId));
}