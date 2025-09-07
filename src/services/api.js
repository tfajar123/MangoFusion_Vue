import { CONFIG_API_URL } from '@/constants/config'
import axios from 'axios'

const api = axios.create({
  baseURL: CONFIG_API_URL,
})

export default api
