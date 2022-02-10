import axios from "axios";
export const getUsers = () => {
  const result = axios
    .get("https://fakestoreapi.com/users")
    .then((res) => {return res.data})
  return result;
};
