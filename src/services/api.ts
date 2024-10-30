import axios from 'axios';

const api = axios.create({
  baseURL: 'https://servicebus2.caixa.gov.br/portaldeloterias/api',
});

export const fetchLatestResults = async () => {
  const response = await api.get('/home/ultimos-resultados');
  return response.data;
};
