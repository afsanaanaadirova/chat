const localApi = localStorage.getItem("api-base-url");

export const BASE_URL = localApi ?? import.meta.env.VITE_BASE_URL;
export const BASE_URL_PORTAL = import.meta.env.VITE_BASE_URL_PORTAL


