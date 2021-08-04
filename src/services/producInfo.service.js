import { BaseService } from "./base.service";
import fileDownload from 'js-file-download'
import axios from "axios";
const BASE_URL = process.env.VUE_APP_BASE_URL_USER;
const headers = {
    // "Content-Type": "application/json",
    'Content-Type': 'image/png',
    "Access-Control-Allow-Origin": "*",
}

export class ProducInfoService extends BaseService {
    static async getList(token, params) {
        try {
            const response = await axios({
                method: "get",
                url: `${BASE_URL}/api/products-info`,
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
    static async createProducInfo(token, data, img) {
        try {
            const response = await axios({
                method: "post",
                url: `${BASE_URL}/api/products-info/`,
                headers: {
                    AuthToken: token,
                },
                data: {
                    name: data.name,
                    description: data.description,
                    imgUrl: img,
                    categoryId: data.categoryId
                },
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
                url: `${BASE_URL}/api/products-info/${idCategory}`,
                headers: {
                    AuthToken: token,
                },
            });
            return response;
        } catch (error) {
            return error.response
        }
    }
    static async delete(token, idProductInfo) {
        try {
            const response = await axios({
                method: "put",
                url: `${BASE_URL}/api/products-info/delete/${idProductInfo}`,
                headers: {
                    AuthToken: token,
                },
            });
            return response;
        } catch (error) {
            return error.response
        }
    }
    static async exportExcel(token, data) {
        try {
            const response = await axios({
                method: 'get',
                url: `${BASE_URL}/api/product-status-details/get-file-report`,
                params: {
                    branchId: data.branchId == 99 ? data.branchId = "" : data.branchId,
                    priceTotalFrom: data.priceTotalFrom,
                    priceTotalTo: data.priceTotalTo,
                    productInfo: data.productInfo,
                    productStatusListCode: data.code,
                    type: data.code.includes("DONE") ? data.type = 1 : data.type = 2,
                },
                responseType: 'blob',
                headers: {
                    AuthToken: token
                }
            })
            fileDownload(response.data, 'ProductStatusDetail.xlsx')
            return response
        } catch (error) {
            console.log(error)
        }
    }
}