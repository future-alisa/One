import axios, {
    AxiosInstance,
    AxiosRequestConfig,
    AxiosResponse,
    CreateAxiosDefaults,
    InternalAxiosRequestConfig
} from 'axios';
import {AxiosRequestHeadersExtend} from "@/api/helper/type-extend";
import {AxiosCanceler} from "@/api/helper/axios-canceler";
import NProgress from "./helper/n-progress";
import {LoadingLayer} from "@/api/helper/loading-layer";
import {requestStatus} from "@/api/helper/request-status";

class HttpClient {
    private service: AxiosInstance;
    private axiosCanceler: AxiosCanceler;

    constructor(config: CreateAxiosDefaults) {
        this.service = axios.create(config);
        this.axiosCanceler = new AxiosCanceler();
        // 请求拦截器
        this.service.interceptors.request.use(
            (config: InternalAxiosRequestConfig) => {
                NProgress.start();
                this.axiosCanceler.addPending(config);
                LoadingLayer.getSingleton().showFullScreenLoadingLayer();
                return {
                    ...config,
                    headers: {
                        ...config.headers,
                        "x-access-token": "",
                    } as AxiosRequestHeadersExtend
                };
            },
            (error) => {
                return Promise.reject(error);
            }
        );
        // 响应拦截器
        this.service.interceptors.response.use(
            (response: AxiosResponse) => {
                const {data, config} = response;
                NProgress.done();
                this.axiosCanceler.removePending(config);
                LoadingLayer.getSingleton().tryHideFullScreenLoadingLayer();
                return data;
            },
            (error) => {
                const {response, message} = error;
                NProgress.done();
                LoadingLayer.getSingleton().tryHideFullScreenLoadingLayer();
                if ((message as string).indexOf("timeout") !== -1) {
                    message.error("请求超时，请稍后再试");
                }
                response?.status && requestStatus(response.status);
                !window.navigator.onLine && (window.location.hash = "/500");
                return Promise.reject(error);
            }
        )
    }

    get<TRes>(url: string, params?: object, config: AxiosRequestConfig = {}): Promise<TRes> {
        return this.service.get(url, {method: 'get', params, ...config});
    }

    post<TRes>(url: string, params?: object, config: AxiosRequestConfig = {}): Promise<TRes> {
        return this.service.post(url, {method: 'post', params, ...config});
    }

    put<TRes>(url: string, params?: object, config: AxiosRequestConfig = {}): Promise<TRes> {
        return this.service.put(url, {method: 'put', params, ...config});
    }

    delete<TRes>(url: string, params?: object, config: AxiosRequestConfig = {}): Promise<TRes> {
        return this.service.delete(url, {method: 'delete', params, ...config});
    }

}

const httpClient = new HttpClient({
    baseURL: '127.0.0.1',
    timeout: 1000 * 5,
    withCredentials: true,
});

export default httpClient;