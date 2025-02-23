import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000", // Your backend URL
  headers: {
    "Content-Type": "application/json",
  },
});

// Example function to get data
export const fetchMessage = async () => {
  try {
    const response = await API.get("/message");
    return response.data;
  } catch (error) {
    console.error("Error fetching message:", error);
  }
};
