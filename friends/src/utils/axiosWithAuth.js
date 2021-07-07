import Axios from 'axios';

const axiosWithAuth = () => {
  const token = localStorage.getItem('token');

  return Axios.create({
    headers: {
      Authorization: token,
    },
  });
};

export default axiosWithAuth;
