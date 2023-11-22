import { axiosInstance } from "../axiosApi";

export const fetchComment = async (): Promise<any> => {
  try {
    const response = await axiosInstance.get("/comments");
    return response.data;
  } catch (error) {
    throw new Error((error as any).response?.data || "Something went wrong");
  }
};
