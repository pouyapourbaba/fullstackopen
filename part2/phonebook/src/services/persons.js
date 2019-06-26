import axios from "axios";
const baseUrl = "http://localhost:3001/persons";

const getAll = () => {
  const request = axios.get(baseUrl);
  return request
    .then(res => res.data)
    .catch(error => alert("Data not fetched", error.message));
};

const postPerson = person => {
  const request = axios.post(baseUrl, person);
  return request
    .then(res => res.data)
    .catch(error => alert("Person not posted", error.message));
};

export default {
  getAll,
  postPerson
};
