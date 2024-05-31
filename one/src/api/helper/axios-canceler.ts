import axios, {AxiosRequestConfig, Canceler} from "axios";
import qs from 'qs';

export class AxiosCanceler {
    private pendingMap: Map<string, Canceler>

    constructor() {
        this.pendingMap = new Map<string, Canceler>();
    }

    private getPendingUrl(config: AxiosRequestConfig) {
        return ([
            config.method,
            config.url,
            qs.stringify(config.data),
            qs.stringify(config.params)
        ].join('&'));
    }

    /**
     * 添加请求
     * @param config
     */
    addPending(config: AxiosRequestConfig) {
        const pendingUrl = this.getPendingUrl(config);
        this.removePendingByUrl(pendingUrl);
        config.cancelToken = config.cancelToken ||
            new axios.CancelToken(cancel => {
                this.pendingMap.set(pendingUrl, cancel);
            })
    }

    /**
     * 移除请求
     * @param pendingUrl 请求url
     */
    private removePendingByUrl(pendingUrl: string) {
        if (this.pendingMap.has(pendingUrl)) {
            const canceler = this.pendingMap.get(pendingUrl);
            canceler && canceler();
            this.pendingMap.delete(pendingUrl);
        }
    }

    /**
     * 根据config移除请求
     * @param config
     */
    removePending(config: AxiosRequestConfig) {
        const pendingUrl = this.getPendingUrl(config);
        this.removePendingByUrl(pendingUrl);
    }

    /**
     * 一次性移除所有pending
     */
    removeAllPending() {
        this.pendingMap.forEach(canceler => {
            canceler();
        })
        this.pendingMap.clear();
    }
}