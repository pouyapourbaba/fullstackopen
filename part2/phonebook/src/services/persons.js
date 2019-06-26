import axios from "axios";
const baseUrl = "http://localhost:3001/persons";

// fetch all the persons
const getAll = () => {
  const request = axios.get(baseUrl);
  return request
    .then(res => res.data)
    .catch(error => alert("Data not fetched", error.message));
};

// create a new person
const postPerson = person => {
  const request = axios.post(baseUrl, person);
  return request
    .then(res => res.data)
    .catch(error => alert("Person not posted", error.message));
};

// delete a person by ID
const deletePerson = id => {
  const request = axios.delete(`${baseUrl}/${id}`);
  return request
    .then(res => res.data)
    .catch(error => alert("Person not deleted", error.message));
};

export default {
  getAll,
  postPerson,
  deletePerson
};
