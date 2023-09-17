import axios from 'axios'

const BASE_URL = 'https://enguage.fly.dev'

export const post = async (endpoint: string, data: Record<string, string>) => {
  return await axios({
    method: 'post',
    url: `${BASE_URL}${endpoint}`,
    data,
  })
}
