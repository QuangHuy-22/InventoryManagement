import { BaseService } from "./base.service";
import axios from "axios";
const BASE_URL = process.env.VUE_APP_BASE_URL_USER;
const headers = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
}

export class ShelfService extends BaseService {
    static async getList(token, params) {
        try {
            const response = await axios({
                method: "get",
                url: `${BASE_URL}/api/shelves`,
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
    static async createShelf(token, data) {
        try {
            const response = await axios({
                method: "post",
                url: `${BASE_URL}/api/shelves`,
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
    static async getDetail(token, idShelf) {
        try {
            const response = await axios({
                method: "get",
                url: `${BASE_URL}/api/shelves/${idShelf}`,
                headers: {
                    AuthToken: token,
                },
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
                url: `${BASE_URL}/api/shelves/edit/${idCategory}`,
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