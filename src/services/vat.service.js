import axios from "axios";
import { BaseService } from "./base.service";
import fileDownload from 'js-file-download'
const BASE_URL = process.env.VUE_APP_BASE_URL_USER;
const headers = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
}

export class VATService extends BaseService {
    static async getList(token, params) {
        try {
            const response = await axios({
                method: "get",
                url: `${BASE_URL}/api/vats`,
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
    static async createVAT(token, id, data) {
        try {
            const response = await axios({
                method: "post",
                url: `${BASE_URL}/api/suppliers/${id}/add-vat`,
                headers: {
                    headers,
                    AuthToken: token,
                },
                data: {
                    code: data.code,
                    tax: data.tax,
                    percent: Number(data.percent / 100),
                    branchId: data.branchId,
                    userName: data.userName
                },
            });
            return response;
        } catch (error) {
            return error.response
        }
    }
    static async createVATDetail(token, id, data) {
        try {
            const response = await axios({
                method: "post",
                url: `${BASE_URL}/api/vats/${id}/add-items`,
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
    static async getListVATDetail(token, params) {
        try {
            const response = await axios({
                method: "get",
                url: `${BASE_URL}/api/vat-details`,
                headers: {
                    headers,
                    AuthToken: token
                },
                params: params
            })
            return response
        } catch (error) {
            return error.response
        }
    }
    static async getListVATCode(token, code, params) {
        try {
            const response = await axios({
                method: "get",
                url: `${BASE_URL}/api/vats/${code}/vat-details`,
                headers: {
                    headers,
                    AuthToken: token
                },
                params: params
            })
            return response
        } catch (error) {
            return error.response
        }
    }
    static async createProductStatus(token, id, data) {
        try {
            const response = await axios({
                method: "post",
                url: `${BASE_URL}/api/vats/${id}/add-products-list`,
                headers: {
                    headers,
                    AuthToken: token
                },
                data: {
                    userName: data
                }
            })
            return response
        } catch (error) {
            return error.response
        }
    }

    static async exportExcel(token, data) {
        try {
            const response = await axios({
                method: 'get',
                url: `${BASE_URL}/api/vat-details/get-file-report`,
                params: {
                    priceTotalFrom: data.priceTotalFrom,
                    priceTotalTo: data.priceTotalTo,
                    vatCode: data.vatCode,
                    productInfo: data.productInfo
                },
                responseType: 'blob',
                headers: {
                    AuthToken: token
                }
            })
            fileDownload(response.data, 'VatDetail.xlsx')
            return response
        } catch (error) {
            console.log(error)
        }
    }

    static async delete(token, idVat) {
        try {
            const response = await axios({
                method: "put",
                url: `${BASE_URL}/api/vats/delete/${idVat}`,
                headers: {
                    AuthToken: token,
                },
            });
            return response;
        } catch (error) {
            return error.response
        }
    }
    static async deleteVATDetail(token, idVat) {
        try {
            const response = await axios({
                method: "put",
                url: `${BASE_URL}/api/vat-details/delete/${idVat}`,
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