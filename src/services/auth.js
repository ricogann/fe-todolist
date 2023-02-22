import { baseAPI } from '@/plugins/axios'

const api = '/auth';

const login = (body) => baseAPI.post(`${api}/login`, body);
const register = (body) => baseAPI.post(`${api}/register`, body);

export { login, register };