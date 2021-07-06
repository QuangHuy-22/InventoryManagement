import { BaseService } from "./base.service";
import axios from "axios";
const BASE_URL = process.env.VUE_APP_BASE_URL_USER;
const headers = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
}

export class CategoryService extends BaseService {
    static async getList(token, params) {
        try {
            const response = await axios({
                method: "get",
                url: `${BASE_URL}/api/categories`,
                params,
                headers: {
                    headers,
                    AuthToken: token
                }
            });
            return response;
        } catch (error) {
            return error.response
        }
    }
    static async createCategory(token, data) {
        try {
            const response = await axios({
                method: "post",
                url: `${BASE_URL}/api/categories`,
                headers: {
                    AuthToken: token,
                },
                data: data,
            });
            return response;
        } catch (error) {
            return error.response
        }
    }
}