
import axios from "axios";

const DEFAULT_API_CONFIG = {
  url: "https://jsonplaceholder.typicode.com",
  // url: 'http://192.168.100.68:3333',
  timeout: 8000
};

const api = axios.create({
  baseURL: DEFAULT_API_CONFIG.url,
  timeout: DEFAULT_API_CONFIG.timeout
});

const timeout = error => {
  if (error && "code" in error && error.code === "ECONNABORTED") {
    error.message = "Conexão interrompida tente novamente mais tarde.";
  }

  return error;
};

api.interceptors.response.use(
  config => config,
  error => Promise.reject(timeout(error))
);

export default api;