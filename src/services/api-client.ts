import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: '089401ea141444699994beba1b44b62e',
  },
});
