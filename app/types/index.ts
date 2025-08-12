// Common types used throughout the application

export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Resource {
  id: string;
  title: string;
  description: string;
  type: 'article' | 'video' | 'audio' | 'document';
  url: string;
  tags: string[];
  author: string;
  publishedAt: Date;
  createdAt: Date;
  updatedAt: Date;
}

export interface ApiResponse<T> {
  data: T;
  message: string;
  success: boolean;
  error?: string;
}

export interface PaginatedResponse<T> extends ApiResponse<T[]> {
  pagination: {
    page: number;
    pageSize: number;
    total: number;
    totalPages: number;
  };
}

export interface FormField {
  name: string;
  label: string;
  type: 'text' | 'email' | 'password' | 'textarea' | 'select';
  required?: boolean;
  placeholder?: string;
  options?: { value: string; label: string }[];
  validation?: {
    minLength?: number;
    maxLength?: number;
    pattern?: string;
  };
}

export type Theme = 'light' | 'dark' | 'system';

export interface AppConfig {
  theme: Theme;
  language: string;
  notifications: boolean;
}
