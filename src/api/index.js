import axios from 'axios';

export const getProjects = () => {
  return axios.get("./../projects.json")
    .then((res) => res.data)
    .catch((error) => console.log(error))
}
