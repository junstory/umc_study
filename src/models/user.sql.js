// models/user.sql.js

export const insertUserSql = "INSERT INTO member (login_id, name, nickname, gender, birthday, address, phone_num) VALUES (?, ?, ?, ?, ?, ?, ?);";

export const getUserID = "SELECT * FROM member WHERE id = ?";

export const connectFoodCategory = "INSERT INTO member_prefer (member_id, category_id) VALUES (?, ?);";

export const confirmEmail = "SELECT EXISTS(SELECT 1 FROM member WHERE login_id = ?) as isExistEmail";

export const getPreferToUserID =
"SELECT ufc.id, ufc.category_id, ufc.member_id, fcl.name "
+ "FROM member_prefer ufc JOIN food_category fcl on ufc.category_id = fcl.id "
+ "WHERE ufc.member_id = ? ORDER BY ufc.category_id ASC;";

//유저 미션도전
export const confirmMission = "SELECT EXISTS(SELECT 1 FROM member_mission WHERE member_id = ? AND mission_id = ?) as isExistMission";

export const insertMissionSql = "INSERT INTO member_mission (member_id, mission_id) VALUES (?, ?);";

export const getMissionID = "SELECT * FROM member_mission WHERE id = ?";


//Review list sql
export const getReviewByReviewId = 
"SELECT u.name, u.id, r.id, r.rating, r.description, r.created_at "
+ "FROM member_review r JOIN shops u on r.shop_id = u.id "
+ "WHERE r.member_id = ? AND r.id < ? "
+ "ORDER BY r.id DESC LIMIT ? ;"

export const getReviewByReviewIdAtFirst = 
"SELECT u.name, u.id, r.id, r.rating, r.description, r.created_at "
+ "FROM member_review r JOIN shops u on r.shop_id = u.id "
+ "WHERE r.member_id = ? "
+ "ORDER BY r.id DESC LIMIT ? ;"