import Axios from "axios"

export const api_sigmed = Axios.create({
  baseURL: `http:///192.168.1.14:9090`
})
