import { BaseService } from "./base.service";
import axios from "axios";
const BASE_URL = process.env.VUE_APP_BASE_URL_USER;
const headers = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
}

export class BranchService extends BaseService {
    static async getList(token, params) {
        try {
            const response = await axios({
                method: "get",
                url: `${BASE_URL}/api/branches`,
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
    static async createBranch(token, data) {
        try {
            const response = await axios({
                method: "post",
                url: `${BASE_URL}/api/branches`,
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
    static async delete(token, idBranch) {
        try {
            const response = await axios({
                method: "put",
                url: `${BASE_URL}/api/branches/delete/${idBranch}`,
                headers: {
                    AuthToken: token,
                },
            });
            return response;
        } catch (error) {
            return error.response
        }
    }
    static async getDetail(token, idBranch) {
        try {
            const response = await axios({
                method: "get",
                url: `${BASE_URL}/api/branches/${idBranch}`,
                headers: {
                    AuthToken: token,
                },
            });
            return response;
        } catch (error) {
            return error.response
        }
    }
    static async update(token, data, idBranch) {
        try {
            const response = await axios({
                method: "put",
                url: `${BASE_URL}/api/branches/edit/${idBranch}`,
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