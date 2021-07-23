import { BaseService } from "./base.service";
import axios from "axios";
const BASE_URL = process.env.VUE_APP_BASE_URL_USER;
const headers = {
    "Access-Control-Allow-Origin": "*",
}

export class ProducService extends BaseService {
    static async getList(token, params) {
        try {
            const response = await axios({
                method: "get",
                url: `${BASE_URL}/api/product-status-lists`,
                params: {
                    page: 1,
                    size: 5,
                    type: params.type
                },
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
    static async getListStatusDetail(token, params) {
        try {
            const response = await axios({
                method: "get",
                url: `${BASE_URL}/api/product-status-details`,
                params: {
                    page: 1,
                    size: 10,
                    type: params.type
                },
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
    static async getCountStatus(token) {
        try {
            const response = await axios({
                method: "get",
                url: `${BASE_URL}/api/product-status-lists/get-count-records`,
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
    static async createProductDetail(token, id, data) {
        try {
            const response = await axios({
                method: "post",
                url: `${BASE_URL}/api/product-status-lists/${id}/add-items`,
                headers: {
                    headers,
                    AuthToken: token,
                },
                data: data
            })
            return response
        } catch (error) {
            return error.response
        }
    }
}