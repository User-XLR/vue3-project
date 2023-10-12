import Request from '@/hooks/axios'

const api = 'https://neurongateway.dev2.neuroncloud.ai'
const baseA = (params: any) => {
  return Request.get(`${api}/m/tenant`, params)
}
export default {
  baseA,
}
