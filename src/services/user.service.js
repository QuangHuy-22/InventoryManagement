import { BaseService } from "./base.service";
import axios from "axios";
const BASE_URL = process.env.VUE_APP_BASE_URL_USER;
const headers = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
}

export class UserService extends BaseService {
    static async getList(token, params) {
        try {
            const response = await axios({
                method: "get",
                url: `${BASE_URL}/api/users`,
                headers: {
                    headers,
                    AuthToken: token
                },
                params: params
            })
            return response;
        } catch (error) {
            return error.response
        }
    }
    static async createUser(token, data) {
        try {
            const response = await axios({
                method: "post",
                url: `${BASE_URL}/api/users`,
                headers: {
                    headers,
                    AuthToken: token
                },
                data: data
            })
            return response;
        } catch (error) {
            return error.response
        }
    }


}