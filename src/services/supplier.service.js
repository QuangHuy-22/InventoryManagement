import { BaseService } from "./base.service";
import axios from "axios";
const BASE_URL = process.env.VUE_APP_BASE_URL_USER;
const headers = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
}

export class SupplierService extends BaseService {
    static async getList(token, params) {
        try {
            const response = await axios({
                method: "get",
                url: `${BASE_URL}/api/suppliers`,
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
    static async createSupplier(token, data) {
        try {
            const response = await axios({
                method: "post",
                url: `${BASE_URL}/api/suppliers`,
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
    static async delete(token, idSupplier) {
        try {
            const response = await axios({
                method: "put",
                url: `${BASE_URL}/api/suppliers/delete/${idSupplier}`,
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
                url: `${BASE_URL}/api/suppliers/edit/${idCategory}`,
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
                url: `${BASE_URL}/api/suppliers/${idCategory}`,
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