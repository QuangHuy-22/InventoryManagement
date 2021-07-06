import { BaseService } from "./base.service";
import axios from "axios";
const BASE_URL = process.env.VUE_APP_BASE_URL_USER;
const headers = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
}

export class VATService extends BaseService {
    static async getList(token, params) {
        try {
            const response = await axios({
                method: "get",
                url: `${BASE_URL}/api/vats`,
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
    static async createVAT(token, id, data) {
        try {
            const response = await axios({
                method: "post",
                url: `${BASE_URL}/api/suppliers/${id}/add-vat`,
                headers: {
                    headers,
                    AuthToken: token,
                },
                data: {
                    code: data.code,
                    tax: data.tax,
                    percent: Number(data.percent),
                    branchId: data.branchId,
                    userName: data.userName
                },
            });
            return response;
        } catch (error) {
            return error.response
        }
    }
    static async createVATDetail(token, id, data) {
        try {
            const response = await axios({
                method: "post",
                url: `${BASE_URL}/api/vats/${id}/add-items`,
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
    static async getListVATDetail(token, params) {
        try {
            const response = await axios({
                method: "get",
                url: `${BASE_URL}/api/vat-details`,
                headers: {
                    headers,
                    AuthToken: token
                },
                params: params
            })
            return response
        } catch (error) {
            return error.response
        }
    }
    static async getListVATCode(token, code, params) {
        try {
            const response = await axios({
                method: "get",
                url: `${BASE_URL}/api/vats/${code}/vat-details`,
                headers: {
                    headers,
                    AuthToken: token
                },
                params: params
            })
            return response
        } catch (error) {
            return error.response
        }
    }
    static async createProductStatus(token, id, data) {
        try {
            const response = await axios({
                method: "post",
                url: `${BASE_URL}/api/vats/${id}/add-products-list`,
                headers: {
                    headers,
                    AuthToken: token
                },
                data: {
                    userName: data
                }
            })
            return response
        } catch (error) {
            return error.response
        }
    }
}