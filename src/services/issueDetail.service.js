import { BaseService } from "./base.service";
import axios from "axios";
const BASE_URL = process.env.VUE_APP_BASE_URL_USER;
const headers = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
}

export class IssueDetailService extends BaseService {
    static async getList(token, params) {
        try {
            const response = await axios({
                method: "get",
                url: `${BASE_URL}/api/issue-details`,
                params: {
                    page: params.page,
                    size: params.size,
                    branchId: params.branchId == 99 ? params.branchId = "" : params.branchId,
                    imei: params.imei,
                    issueCode: params.issueCode,
                    priceTotalFrom: params.priceTotalFrom,
                    priceTotalTo: params.priceTotalTo,
                    productInfo: params.productInfo,
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
    static async delete(token, idIssueDetail) {
        try {
            const response = await axios({
                method: "put",
                url: `${BASE_URL}/api/issue-details/delete/${idIssueDetail}`,
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