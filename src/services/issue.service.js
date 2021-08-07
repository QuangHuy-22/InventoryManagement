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
                params: {
                    page: params.page,
                    size: params.size,
                    branchId: params.branchId == 99 ? params.branchId = "" : params.branchId,
                    code: params.code,
                    customerName: params.customerName,
                    userName: params.userName,
                    dateFrom: params.dateFrom,
                    dateTo: params.dateTo,
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
    static async delete(token, idIssue) {
        try {
            const response = await axios({
                method: "put",
                url: `${BASE_URL}/api/issues/delete/${idIssue}`,
                headers: {
                    AuthToken: token,
                },
            });
            return response;
        } catch (error) {
            return error.response
        }
    }
    static async getDetail(token, idIssue) {
        try {
            const response = await axios({
                method: "get",
                url: `${BASE_URL}/api/issues/${idIssue}`,
                headers: {
                    AuthToken: token,
                },
            });
            return response;
        } catch (error) {
            return error.response
        }
    }
    static async getListDetailCode(token, code, params) {
        try {
            const response = await axios({
                method: "get",
                url: `${BASE_URL}/api/issues/${code}/issue-details`,
                headers: {
                    AuthToken: token,
                },
                params: {
                    page: 1,
                    size: 10,
                    branchId: params.branchId == 99 ? params.branchId = "" : params.branchId,
                    imei: params.imei,
                    issueCodeParam: params.code,
                    priceTotalFrom: params.priceTotalFrom,
                    priceTotalTo: params.priceTotalTo,
                    productInfo: params.productInfo,
                }
            });
            return response;
        } catch (error) {
            return error.response
        }
    }
}