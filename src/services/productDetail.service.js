import { BaseService } from "./base.service";
import axios from "axios";
const BASE_URL = process.env.VUE_APP_BASE_URL_USER;
const headers = {
    // "Content-Type": "application/json",
    'Content-Type': 'image/png',
    "Access-Control-Allow-Origin": "*",
}

export class ProducDetailService extends BaseService {
    static async getList(token, params) {
        try {
            const response = await axios({
                method: "get",
                url: `${BASE_URL}/api/products-detail`,
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
    static async createProductDetail(token, data) {
        try {
            const response = await axios({
                method: "post",
                url: `${BASE_URL}/api/products-detail/`,
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

    static async delete(token, idProductDetail) {
        try {
            const response = await axios({
                method: "put",
                url: `${BASE_URL}/api/products-detail/delete/${idProductDetail}`,
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
}