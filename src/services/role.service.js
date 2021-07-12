import { BaseService } from "./base.service";
import axios from "axios";
const BASE_URL = process.env.VUE_APP_BASE_URL_USER;
export class RoleService extends BaseService {
    static async getListAddUser(token) {
        try {
            const response = await axios({
                method: "post",
                url: `${BASE_URL}/api/roles/search-role`,
                headers: {
                    Authorization: `Bearer ${token}`,
                },
                data: {},
                params: {
                    page: 1,
                    size: 300
                }
            })
            return response;
        } catch (error) {
            return error.response
                // console.log(error);
        }

    }
    static async getList(token, data) {
        try {
            const response = await axios({
                method: "get",
                url: `${BASE_URL}/api/roles`,
                headers: {
                    AuthToken: token,
                },
                params: data
            })
            return response;
        } catch (error) {
            return error.response
                // console.log(error);
        }

    }
    static async createRole(token, data) {
        try {
            const response = await axios({
                method: "post",
                url: `${BASE_URL}/api/roles`,
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