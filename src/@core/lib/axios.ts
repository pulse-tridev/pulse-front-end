import axios from "axios";

const axiosJwt = axios.create({
  baseURL: process.env.API_BASE_URL,
  // withCredentials: true, // para cookies httpOnly
});

axiosJwt.interceptors.response.use(
  (response) => response,
  (error) => {
    // força o throw de Error com message do backend
    const message =
      error.response?.data?.message || error.message || "Erro inesperado";
    return Promise.reject(new Error(message));
  }
);

export default axiosJwt;
