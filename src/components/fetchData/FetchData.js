import axios from 'axios';
 
export const API = 'https://jsonplaceholder.typicode.com';
 
export const fetchData = async query => {
  const url = `${API}/${query}`;
 
  return await axios.get(url);
};
 
fetchData('users');