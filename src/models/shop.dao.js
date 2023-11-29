// models/shop.dao.js

import { pool } from "../../config/db.config";
import { BaseError } from "../../config/error";
import { status } from "../../config/response.status";
import { confirmShop, getShopID, insertShopSql, confirmShopExist, insertReviewSql, getReviewID } from "./shop.sql.js";

// shop 데이터 삽입
export const addShop = async (data) => {
    try{
        const conn = await pool.getConnection();
        const [confirm] = await pool.query(confirmShop, [data.name, data.regionId]);
        if(confirm[0].isExistShop){
            conn.release();
            return -1;
        }
        const result = await pool.query(insertShopSql, [data.name, data.description, data.address, data.phone_num, data.regionId]);
        conn.release();

        return result[0].insertId;
        
    }catch (err) {

        throw new BaseError(status.SHOP_PARAMETER_IS_WRONG);
    }
}

// 가게 정보 얻기
export const getShop = async (shopId) => {
    try {
        const conn = await pool.getConnection();
        const [shop] = await pool.query(getShopID, shopId);
        console.log(1);
        console.log(shop);

        if(shop.length == 0){
            return -1;
        }

        conn.release();
        return shop;
        
    } catch (err) {
        throw new BaseError(status.SHOP_PARAMETER_IS_WRONG);
    }
}

//리뷰 등록
export const addReview = async (data) => {
    try{
        console.log(1);
        const conn = await pool.getConnection();
        console.log(2);
        const [confirm] = await pool.query(confirmShopExist, data.shop_id);
        console.log(3);
        if(!(confirm[0].isExistShop)){
            conn.release();
            return -1;
        }
        console.log(4);
        const result = await pool.query(insertReviewSql, [data.member_id, data.shop_id, data.description, data.rating]);
        console.log(5);
        conn.release();
        return result[0].insertId;
        
    }catch (err) {
        throw new BaseError(status.REVIEW_PARAMETER_IS_WRONG);
    }
}

// 리뷰 정보 얻기
export const getReview = async (reviewId) => {
    try {
        const conn = await pool.getConnection();
        const [review] = await pool.query(getReviewID, reviewId);

        console.log(review);

        if(review.length == 0){
            return -1;
        }

        conn.release();
        return review;
        
    } catch (err) {
        throw new BaseError(status.REVIEW_PARAMETER_IS_WRONG);
    }
}