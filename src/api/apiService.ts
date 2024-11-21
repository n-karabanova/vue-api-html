import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { ApiResponse } from "@/interfaces/index.interface";

export class ApiService {
    static async request<T>(config: AxiosRequestConfig): Promise<ApiResponse<T>> {
        try {
            const response: AxiosResponse<T> = await axios(config);
            return {
                data: response.data,
                error: null,
            };
        } catch (error) {
            return {
                data: null, // В случае ошибки, возвращаем null или подходящее значение
                error: error instanceof Error ? error.message : 'Unknown error',
            };
        }
    }
}
