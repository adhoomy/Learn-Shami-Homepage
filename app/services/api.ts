import { ApiResponse, PaginatedResponse } from '@/types';

class ApiService {
  private baseURL: string;
  private timeout: number;

  constructor() {
    this.baseURL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api';
    this.timeout = 10000;
  }

  private async request<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<T> {
    const url = `${this.baseURL}${endpoint}`;
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), this.timeout);

    try {
      const response = await fetch(url, {
        ...options,
        signal: controller.signal,
        headers: {
          'Content-Type': 'application/json',
          ...options.headers,
        },
      });

      clearTimeout(timeoutId);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      clearTimeout(timeoutId);
      if (error instanceof Error && error.name === 'AbortError') {
        throw new Error('Request timeout');
      }
      throw error;
    }
  }

  async get<T>(endpoint: string): Promise<ApiResponse<T>> {
    return this.request<ApiResponse<T>>(endpoint);
  }

  async post<T>(endpoint: string, data: any): Promise<ApiResponse<T>> {
    return this.request<ApiResponse<T>>(endpoint, {
      method: 'POST',
      body: JSON.stringify(data),
    });
  }

  async put<T>(endpoint: string, data: any): Promise<ApiResponse<T>> {
    return this.request<ApiResponse<T>>(endpoint, {
      method: 'PUT',
      body: JSON.stringify(data),
    });
  }

  async delete<T>(endpoint: string): Promise<ApiResponse<T>> {
    return this.request<ApiResponse<T>>(endpoint, {
      method: 'DELETE',
    });
  }

  async getPaginated<T>(
    endpoint: string,
    page: number = 1,
    pageSize: number = 10
  ): Promise<PaginatedResponse<T>> {
    const queryParams = new URLSearchParams({
      page: page.toString(),
      pageSize: pageSize.toString(),
    });
    return this.request<PaginatedResponse<T>>(`${endpoint}?${queryParams}`);
  }
}

export const apiService = new ApiService();
