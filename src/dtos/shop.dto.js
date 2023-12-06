// dtos/shop.dto.js

//register response DTO
export const RegisterResponseDTO = (shop) => {
    return {"name": shop[0].name, "description": shop[0].description};
}

export const ReviewResponseDTO = (review) => {
    return {"description": review[0].description, "rating": review[0].rating};
}


//reviews
export const previewReviewResponseDTO = (data) => {
    const reviews = [];
    console.log(data);
    for (let i = 0; i < data.length; i++) {
        reviews.push({
            "user_name": data[i].name,
            "rating": data[i].rating,
            "description": data[i].description,
            "create_date": formatDate(data[i].created_at)
        })
    }
    console.log(2);
    return {"reviewData": reviews, "cursorId": data[data.length-1].id};
}

const formatDate = (date) => {
    return new Intl.DateTimeFormat('ko').format(new Date(date)).replaceAll(" ","").slice(0,-1);
}

export const previewMissionResponseDTO = (data) => {
    const reviews = [];
    console.log(data);
    for (let i = 0; i < data.length; i++) {
        reviews.push({
            "title": data[i].title,
            "points": data[i].points,
            "description": data[i].description,
            "create_date": formatDate(data[i].created_at)
        })
    }
    console.log(2);
    return {"reviewData": reviews, "cursorId": data[data.length-1].id};
}