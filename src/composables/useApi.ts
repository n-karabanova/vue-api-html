import { ref } from 'vue';
import { ApiService } from '@/api/apiService';
import { ApiResponse } from "@/interfaces/index.interface";

export function useApi<T>(url: string, method: string, headers?: Record<string, string>, body?: T) {
    const data = ref<T | null>(null);
    const status = ref<number | null>(null);
    const loading = ref<boolean>(false);
    const error = ref<string | null>(null);
    
    const fetchData = async () => {
        loading.value = true;
        error.value = null;
        try {
            const response: ApiResponse<T | null> = await ApiService.request<T>({
				url,
				method,
				headers,
				data: body,
			});
			
            data.value = response.data;
            status.value = 200; // Здесь можно установить статус, который Вы хотите
        } catch (err) {
            error.value = err instanceof Error ? err.message : 'Unknown error';
            status.value = null;
        } finally {
            loading.value = false;
        }
    };

    return { data, status, loading, error, fetchData };
}
