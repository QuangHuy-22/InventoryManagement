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
}