import axios from "axios";

const BASE_URL = "https://bookstore-ravi.cyclic.app/";




export const publicRequest = axios.create({
  baseURL: BASE_URL,
});
