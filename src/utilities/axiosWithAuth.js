import axios from "axios";

export const axiosWithAuth = () => {
  const key = localStorage.getItem("token");

  const axiosInstance = axios.create({
    headers: {
      "Content-Type": "application/json",
      Authorization: `Token ${key ? `${key}` : null}`,
    },
  });

  return axiosInstance;
};
export default axiosWithAuth;
