import axios from "axios";
const baseUrl = "http://localhost:3001";

const getAll = () => {
  const req = axios.get(`${baseUrl}/api/persons`);
  return req.then((res) => res.data);
};

const create = (newObject) => {
  const req = axios.post(`${baseUrl}/api/persons`, newObject);
  return req.then((res) => res.data);
};

const update = (id, newObject) => {
  const req = axios.put(`${baseUrl}/${id}`, newObject);
  return req.then((res) => res.data);
};

const remove = (id) => {
  const req = axios.delete(`${baseUrl}/${id}`);
  return req.then((res) => res.data);
};
// if (condition) {
  
// } else if(true) {
  
// }

export default {
  getAll,
  create,
  update,
  remove,
};
