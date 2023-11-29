// models/user.sql.js

export const insertUserSql = "INSERT INTO member (login_id, name, nickname, gender, birthday, address, phone_num) VALUES (?, ?, ?, ?, ?, ?, ?);";

export const getUserID = "SELECT * FROM member WHERE id = ?";

export const connectFoodCategory = "INSERT INTO member_prefer (member_id, category_id) VALUES (?, ?);";

export const confirmEmail = "SELECT EXISTS(SELECT 1 FROM member WHERE login_id = ?) as isExistEmail";

export const getPreferToUserID =
"SELECT ufc.id, ufc.category_id, ufc.member_id, fcl.name "
+ "FROM member_prefer ufc JOIN food_category fcl on ufc.category_id = fcl.id "
+ "WHERE ufc.member_id = ? ORDER BY ufc.category_id ASC;";