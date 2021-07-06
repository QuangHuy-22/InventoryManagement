import { BaseService } from "./base.service";
import axios from "axios";
const BASE_URL = process.env.VUE_APP_BASE_URL_USER;
// const headers = {
//     "Content-Type": "application/json",
//     "Access-Control-Allow-Origin": "*",
//     "User-Agent": "Web"
// }

export class UserService extends BaseService {
    static async getList(token, params) {
        try {
            const response = await axios.post(`${BASE_URL}/api/users`, params, {
                headers: {
                    AuthToken: token,
                },
            });

            return response;
        } catch (error) {
            return error.response
        }
    }


    // static async getDetail(token, idUser) {
    //     try {
    //         const response = await axios.get(`${BASE_URL}/api/users/${idUser}`, {
    //             headers: {
    //                 Authorization: `Bearer ${token}`,
    //             },
    //         });

    //         return response;
    //     } catch (error) {
    //         return error.response
    //     }
    // }
    // static async createUser(token, data) {
    //     try {
    //         const response = await axios({
    //             method: "post",
    //             url: `${BASE_URL}/api/users/create`,
    //             headers: {
    //                 Authorization: `Bearer ${token}`,
    //             },
    //             data: data,
    //         });
    //         return response;
    //     } catch (error) {
    //         return error.response
    //     }
    // }
    // static async updateUser(token, data, idUser) {
    //     try {
    //         const response = await axios({
    //             method: "put",
    //             url: `${BASE_URL}/api/users/edit-user/${idUser}`,
    //             headers: {
    //                 Authorization: `Bearer ${token}`,
    //             },
    //             data: data,
    //         })
    //         return response
    //     } catch (error) {
    //         return error.response
    //     }
    // }
}