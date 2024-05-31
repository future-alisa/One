import {AxiosRequestHeaders} from "axios";

/**
 * 自定义请求头
 */
export type AxiosRequestHeadersExtend = AxiosRequestHeaders & {
    "x-access-token": string;
}