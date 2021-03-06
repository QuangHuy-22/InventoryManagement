import { BaseService } from "./base.service";
import fileDownload from 'js-file-download'
import axios from "axios";
const BASE_URL = process.env.VUE_APP_BASE_URL_USER;
const headers = {
    "Access-Control-Allow-Origin": "*",
}

export class ProducService extends BaseService {
    static async getList(token, params) {
        try {
            const response = await axios({
                method: "get",
                url: `${BASE_URL}/api/product-status-lists`,
                params: {
                    page: params.page,
                    size: params.size,
                    type: params.type,
                    branchId: params.branchId == 99 ? params.branchId = "" : params.branchId,
                    code: params.code,
                    priceFrom: params.priceFrom,
                    priceTo: params.priceTo,
                    vatCode: params.vatCode,
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
    static async getListStatusDetail(token, params) {
        try {
            const response = await axios({
                method: "get",
                url: `${BASE_URL}/api/product-status-details`,
                params: {
                    page: params.page,
                    size: params.size,
                    type: params.type,
                    branchId: params.branchId == 99 ? params.branchId = "" : params.branchId,
                    productInfo: params.productInfo,
                    priceTotalFrom: params.priceTotalFrom,
                    priceTotalTo: params.priceTotalFrom,
                    productStatusListCode: params.productStatusListCode,
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
    static async getCountStatus(token) {
        try {
            const response = await axios({
                method: "get",
                url: `${BASE_URL}/api/product-status-lists/get-count-records`,
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
    static async createProductDetail(token, id, data) {
        try {
            const response = await axios({
                method: "post",
                url: `${BASE_URL}/api/product-status-lists/${id}/add-items`,
                headers: {
                    headers,
                    AuthToken: token,
                },
                data: data
            })
            return response
        } catch (error) {
            return error.response
        }
    }

    static async delete(token, idProductStatus) {
        try {
            const response = await axios({
                method: "put",
                url: `${BASE_URL}/api/product-status-lists/delete/${idProductStatus}`,
                headers: {
                    AuthToken: token,
                },
            });
            return response;
        } catch (error) {
            return error.response
        }
    }
    static async deleteProductDetail(token, idProductStatusDetail) {
        try {
            const response = await axios({
                method: "put",
                url: `${BASE_URL}/api/product-status-details/delete/${idProductStatusDetail}`,
                headers: {
                    AuthToken: token,
                },
            });
            return response;
        } catch (error) {
            return error.response
        }
    }
    static async getDetail(token, idProductStatus) {
        try {
            const response = await axios({
                method: "get",
                url: `${BASE_URL}/api/product-status-lists/${idProductStatus}`,
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
                method: 'post',
                url: `${BASE_URL}/api/product-status-details/export-excel`,
                params: data,
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
    static async exportExcelCode(token, data) {
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
    static async getListDetailCode(token, code, params) {
        try {
            const response = await axios({
                method: "get",
                url: `${BASE_URL}/api/product-status-lists/${code}/product-status-details`,
                headers: {
                    AuthToken: token,
                },
                params: {
                    page: 1,
                    size: 10,
                    type: params.code.includes("DONE") ? params.type = 1 : params.type = 2,
                    code: params.code,
                    priceTotalFrom: params.priceTotalFrom,
                    priceTotalTo: params.priceTotalTo,
                    productInfo: params.productInfo,
                    productStatusListCode: params.productStatusListCode,
                    productStatusListCodeParam: params.code
                }
            });
            return response;
        } catch (error) {
            return error.response
        }
    }

}