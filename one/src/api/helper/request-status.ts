import {message} from "antd";

/**
 * 请求响应码
 * TODO:把下面的硬编码改成枚举，方便外部代码调用
 */
export enum STATUS_CODE {
    REQUEST_FAILURE = 400,
    LOGIN_INSPIRATION = 401,
    UNAUTHENTICATED_ACCESS = 403,
    RESOURCES_UNKNOWN = 404,
    WRONG_REQUEST_METHOD = 405,
    REQUEST_TIMEOUT = 408,
    SERVICE_EXCEPTION = 500,
    GATEWAY_EXCEPTION = 502,
    UNUSABLE_SERVICE = 503,
    GATEWAY_TIMEOUT = 504
}

export const STATUS_CODE_DESC: { [key in STATUS_CODE]: string } = {
    [STATUS_CODE.REQUEST_FAILURE]: "请求失败!请您稍后重试",
    [STATUS_CODE.LOGIN_INSPIRATION]: "登录失效！请您重新登录",
    [STATUS_CODE.UNAUTHENTICATED_ACCESS]: "当前账号无权限访问!",
    [STATUS_CODE.RESOURCES_UNKNOWN]: "你所访问的资源不存在！",
    [STATUS_CODE.WRONG_REQUEST_METHOD]: "请求方式错误！请您稍后重试",
    [STATUS_CODE.REQUEST_TIMEOUT]: "请求超时！请您稍后重试",
    [STATUS_CODE.SERVICE_EXCEPTION]: "服务异常！",
    [STATUS_CODE.GATEWAY_EXCEPTION]: "网关错误！",
    [STATUS_CODE.UNUSABLE_SERVICE]: "服务不可用！",
    [STATUS_CODE.GATEWAY_TIMEOUT]: "网关超时！",
}


/**
 * 网络请求状态码显示
 * @param status
 */
export function requestStatus(status: number) {
    const statusCode = status as STATUS_CODE;
    const errorDesc = STATUS_CODE_DESC[statusCode];
    if (errorDesc) {
        message.error(errorDesc).then(r => {
        });
    } else {
        message.error("请求失败，未知异常!").then(r => {
        });
    }
}