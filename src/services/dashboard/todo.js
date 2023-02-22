import { baseAPI } from '@/plugins/axios'

const api = '/api/todo';

const list = () => baseAPI.get(`${api}`);
const add = (body) => baseAPI.post(`${api}`, body);
const detail = (id) => baseAPI.get(`${api}/${id}`);
const update = (id, body) => baseAPI.put(`${api}/${id}`, body);
const del = (id) => baseAPI.delete(`${api}/${id}`);

export { list, add, update, del, detail };