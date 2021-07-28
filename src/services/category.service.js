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
    static async update(token, data, idCategory) {
        try {
            const response = await axios({
                method: "put",
                url: `${BASE_URL}/api/categories/edit/${idCategory}`,
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
    static async getDetail(token, idCategory) {
        try {
            const response = await axios({
                method: "get",
                url: `${BASE_URL}/api/categories/${idCategory}`,
                headers: {
                    AuthToken: token,
                },
            });
            return response;
        } catch (error) {
            return error.response
        }
    }
    static async delete(token, idCategory) {
        try {
            const response = await axios({
                method: "put",
                url: `${BASE_URL}/api/categories/delete/${idCategory}`,
                headers: {
                    AuthToken: token,
                },
            });
            return response;
        } catch (error) {
            return error.response
        }
    }
}