import axios from "axios";
const baseUrl = "http://localhost:3001/persons";

// fetch all the persons
const getAll = () => {
  const request = axios.get(baseUrl);
  return request.then(res => res.data);
};

// create a new person
const postPerson = person => {
  const request = axios.post(baseUrl, person);
  return request.then(res => res.data);
};

// delete a person by ID
const deletePerson = id => {
  const request = axios.delete(`${baseUrl}/${id}`);
  return request.then(res => res.data);
};

// update the number if the user exists
const updateNumber = (person, id) => {
  const request = axios.put(`${baseUrl}/${id}`, person);
  return request.then(res => res.data);
};

export default {
  getAll,
  postPerson,
  deletePerson,
  updateNumber
};
