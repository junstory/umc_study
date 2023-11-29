// models/shop.dao.js

import { pool } from "../../config/db.config";
import { BaseError } from "../../config/error";
import { status } from "../../config/response.status";
import { confirmShop, getShopID, insertShopSql } from "./shop.sql.js";

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