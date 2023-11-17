import axiosClient from './axiosClient';

const dataApi = {
  getAll: () => axiosClient.get('data'),
};

export default dataApi;
