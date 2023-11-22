import { axiosInstance } from "../axiosApi";

export const fetchData = async (): Promise<any> => {
  try {
    const response = await axiosInstance.get("/posts");
    return response.data;
  } catch (error) {
    throw new Error((error as any).response?.data || "Something went wrong");
  }
};

export const getPostsById = async (id: number): Promise<any> => {
  try {
    const response = await axiosInstance.get(`/posts/${id}`);
    return response.data;
  } catch (error) {
    throw new Error((error as any).response?.data || "Something went wrong");
  }
};
