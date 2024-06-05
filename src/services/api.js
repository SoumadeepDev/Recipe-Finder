import { toast } from "react-toastify";
import axios from "axios";
import { API_URL } from "../assets/constant";

export const getRecipes = async (searchedQuery) => {
  try {
    let response = await axios.get(`${API_URL}/search?q=${searchedQuery}`);
    return response.data;
  } catch (error) {
    toast.error(error.message);
    return error.response;
  }
};


export const getRecipe = async (searchedQuery) => {
  try {
    let response = await axios.get(`${API_URL}/get?rId=${searchedQuery}`);
    return response.data;
  } catch (error) {
    toast.error(error.message);
    return error.response;
  }
};
