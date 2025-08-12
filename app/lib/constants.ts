// Application constants
export const APP_NAME = 'Learn Palestinian';
export const APP_DESCRIPTION = 'Educational resources about Palestinian culture, history, and language';
export const APP_VERSION = '1.0.0';

// Navigation constants
export const NAV_ITEMS = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Resources', href: '/resources' },
  { name: 'Contact', href: '/contact' },
] as const;

// API constants
export const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3000/api';
export const API_TIMEOUT = 10000; // 10 seconds

// UI constants
export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
} as const;

// Pagination constants
export const DEFAULT_PAGE_SIZE = 10;
export const MAX_PAGE_SIZE = 100;
