import { BaseService } from "./base.service";
import axios from "axios";
const BASE_URL = process.env.VUE_APP_BASE_URL_USER;
const headers = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
}

export class CustomerService extends BaseService {
    static async getList(token, params) {
        try {
            const response = await axios({
                method: "get",
                url: `${BASE_URL}/api/customers`,
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
    static async getDetail(token, id) {
        try {
            const response = await axios({
                method: "get",
                url: `${BASE_URL}/api/customers/${id}`,
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
    static async createCustomer(token, data) {
        try {
            const response = await axios({
                method: "post",
                url: `${BASE_URL}/api/customers`,
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
    static async createIssue(token, id, userName) {
        try {
            const response = await axios({
                method: "post",
                url: `${BASE_URL}/api/customers/${id}/add-issue`,
                headers: {
                    AuthToken: token,
                },
                params: {
                    userName: userName
                }
            });
            return response;
        } catch (error) {
            return error.response
        }
    }
}