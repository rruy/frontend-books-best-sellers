import axios from 'axios';

export const apiBFF = axios.create({
  baseURL: process.env.API_BASE_URL,
});

export const APIService = {
  get: (route = '/') => apiBFF.get(route).then(({ data }) => data),
};
