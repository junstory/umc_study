// models/user.dao.js

import { pool } from "../../config/db.config";
import { BaseError } from "../../config/error";
import { status } from "../../config/response.status";
import { connectFoodCategory, confirmEmail, getUserID, insertUserSql, getPreferToUserID, confirmMission, insertMissionSql, getMissionID } from "./user.sql.js";

// User 데이터 삽입
export const addUser = async (data) => {
    try{
        const conn = await pool.getConnection();
        const [confirm] = await pool.query(confirmEmail, data.email);
        
        if(confirm[0].isExistEmail){
            conn.release();
            return -1;
        }
        const result = await pool.query(insertUserSql, [data.email, data.name,data.nickname, data.gender, data.birth, data.addr, data.phone]);
        conn.release();
        return result[0].insertId;
        
    }catch (err) {
        console.log("ADDUSER");
        throw new BaseError(status.PARAMETER_IS_WRONG);
    }
}

// 사용자 정보 얻기
export const getUser = async (userId) => {
    try {
        const conn = await pool.getConnection();
        const [user] = await pool.query(getUserID, userId);

        console.log(userId+ "는" + user);

        if(user.length == 0){
            return -1;
        }

        conn.release();
        return user;
        
    } catch (err) {
        console.log("GETUSER");
        throw new BaseError(status.PARAMETER_IS_WRONG);
    }
}

// 음식 선호 카테고리 매핑
export const setPrefer = async (userId, foodCategoryId) => {
    try {
        const conn = await pool.getConnection();
        
        await pool.query(connectFoodCategory, [foodCategoryId, userId]);

        conn.release();
        
        return;
    } catch (err) {
        console.log("SETPREFER");
        throw new BaseError(status.PARAMETER_IS_WRONG);

    }
}

// 사용자 선호 카테고리 반환
export const getUserPreferToUserID = async (userID) => {
    try {
        const conn = await pool.getConnection();
        const prefer = await pool.query(getPreferToUserID, userID);

        conn.release();

        return prefer;
    } catch (err) {
        console.log("GETUSERPREFERTOUSERID");
        throw new BaseError(status.PARAMETER_IS_WRONG);
    }
}

// 미션추가
export const addMission = async (data) => {
    try{
        const conn = await pool.getConnection();
        console.log(1);
        const [confirm] = await pool.query(confirmMission, [data.member_id, data.mission_id]);
        console.log(2);
        if(confirm[0].isExistMission){
            conn.release();
            return -1;
        }
        console.log(3);
        const result = await pool.query(insertMissionSql, [data.member_id, data.mission_id]);
        console.log(4);
        conn.release();
        console.log(5);
        return result[0].insertId;
        
    }catch (err) {
        console.log("ADD");
        throw new BaseError(status.PARAMETER_IS_WRONG);
    }
}

// 사용자가 도전한 미션 정보 얻기
export const getMission = async (missionId) => {
    try {
        const conn = await pool.getConnection();
        const [mission] = await pool.query(getMissionID, missionId);

        if(mission.length == 0){
            return -1;
        }

        conn.release();
        return mission;
        
    } catch (err) {
        throw new BaseError(status.PARAMETER_IS_WRONG);
    }
}