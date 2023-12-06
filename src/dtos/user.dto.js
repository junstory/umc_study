// dtos/user.dto.js

// Register response DTO
export const RegisterResponseDTO = (user) => {

    return {"email": user[0].login_id, "name": user[0].name};
}

export const MissionResponseDTO = (mission) =>{
    return {"mission_id": mission[0].mission_id, "member_id": mission[0].member_id};
}

//reviews
export const previewReviewResponseDTO = (data) => {
    const reviews = [];
    console.log(data);
    for (let i = 0; i < data.length; i++) {
        reviews.push({
            "shop_name": data[i].name,
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