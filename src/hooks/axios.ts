import axios from "axios";
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { ElMessage } from "element-plus";

type Result<T> = {
	code: number;
	message: string;
	result: T;
};

// 导出Request类，可以用来自定义传递配置来创建实例
export class Request {
	// axios 实例
	instance: AxiosInstance;

	// 基础配置，url和超时时间
	baseConfig: AxiosRequestConfig = { timeout: 60000 };

	constructor(configs: AxiosRequestConfig) {
		// 使用axios.create创建axios实例
		this.instance = axios.create(Object.assign(this.baseConfig, configs));

		this.instance.interceptors.request.use(
			(_config: any) => {
				// 一般会请求拦截里面加token，用于后端的验证
				const token = localStorage.getItem("token") as string;
				const config = _config;
				if (token) {
					config.headers.Authorization = token;
				}
				return config;
			},
			(err: any) => {
				// 请求错误，这里可以用全局提示框进行提示
				return Promise.reject(err);
			}
		);
		this.instance.interceptors.response.use(
			(res: AxiosResponse) => {
				// 直接返回res，当然你也可以只返回res.data
				// 系统如果有自定义code也可以在这里处理
				return res;
			},
			(err: any) => {
				ElMessage({
					message: err.message,
					type: "error"
				});
				// 这里用来处理http常见错误，进行全局提示
				return Promise.reject(err);
			}
		);
	}

	// 定义请求方法
	public request(config: AxiosRequestConfig): Promise<AxiosResponse> {
		return this.instance.request(config);
	}

	public get<T = any>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<Result<T>>> {
		return this.instance.get(url, config);
	}

	public post<T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<AxiosResponse<Result<T>>> {
		return this.instance.post(url, data, config);
	}

	public put<T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<AxiosResponse<Result<T>>> {
		return this.instance.put(url, data, config);
	}

	public delete<T = any>(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<Result<T>>> {
		return this.instance.delete(url, config);
	}
}
export default new Request({});
