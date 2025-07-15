import axios from "axios";

const API_URL = "https://polimericos-inventory-api.onrender.com/api";

export const getAllProducts = async () => {
  try {
    const response = await axios.get(`${API_URL}/Products`);
    return response.data;
  } catch (error) {
    console.error("Error al obtener productos:", error);
    throw error;
  }
};
