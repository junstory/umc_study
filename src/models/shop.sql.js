// models/shop.sql.js

export const insertShopSql = "INSERT INTO shops (name, description, address, phone_num, region_id) VALUES (?, ?, ?, ?, ?);";

export const getShopID = "SELECT * FROM shops WHERE id = ?";

export const confirmShop = "SELECT EXISTS(SELECT 1 FROM shops WHERE name = ? AND region_id = ?) as isExistShop;";


// Review sql
export const insertReviewSql = "INSERT INTO member_review (member_id, shop_id, description, rating) VALUES (?, ?, ?, ?);";

export const confirmShopExist = "SELECT EXISTS(SELECT 1 FROM shops WHERE id = ?) as isExistShop;";

export const getReviewID = "SELECT * FROM member_review WHERE id = ?";

//Review list sql
export const getReviewByReviewId = 
"SELECT u.name, u.id, r.id, r.rating, r.description, r.created_at "
+ "FROM member_review r JOIN member u on r.member_id = u.id "
+ "WHERE r.shop_id = ? AND r.id < ? "
+ "ORDER BY r.id DESC LIMIT ? ;"

export const getReviewByReviewIdAtFirst = 
"SELECT u.name, u.id, r.id, r.rating, r.description, r.created_at "
+ "FROM member_review r JOIN member u on r.member_id = u.id "
+ "WHERE r.shop_id = ? "
+ "ORDER BY r.id DESC LIMIT ? ;"