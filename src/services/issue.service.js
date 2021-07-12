import { BaseService } from "./base.service";
import axios from "axios";
const BASE_URL = process.env.VUE_APP_BASE_URL_USER;
const headers = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
}

export class IssueService extends BaseService {
    static async getList(token, params) {
        try {
            const response = await axios({
                method: "get",
                url: `${BASE_URL}/api/issues`,
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
    static async createIssueDetail(token, dataIssue) {
        try {
            const response = await axios({
                method: "post",
                url: `${BASE_URL}/api/issues/${dataIssue.issueId}/add-items`,
                headers: {
                    headers,
                    AuthToken: token
                },
                data: dataIssue
            })
            return response
        } catch (error) {
            return error.response
        }
    }
}