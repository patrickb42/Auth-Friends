import Axios from 'axios';

const axiosWithAuth = () => {
  const token = localStorage.getItem('token');

  return axiosWithAuth.create({
    headers: {
      Authorization: token,
    },
  });
};

export default axiosWithAuth;
