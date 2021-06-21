import axios from "axios";
//const baseUrl = "http://localhost:3001/persons";
const baseUrl = "/persons";

export const getAll = () => {
  const request = axios.get(baseUrl);
  return request.then((response) => response.data);
};

export const create = (newObject) => {
  const request = axios.post(baseUrl, newObject);
  return request
    .then((response) => response.data)
    .catch("tfx", console.log(error => error.response.data));
};

export const update = (id, newObject) => {
  const request = axios.put(
    `http://localhost:3001/api/persons/${id}`,
    newObject
  );
  return request.then((response) => response.data);
};
