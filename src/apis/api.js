import axios from "axios";

let url = "https://filmy-hope-omar-back.herokuapp.com/api";

const BackEndAPI = axios.create({
  baseURL: url,
});
export default BackEndAPI;