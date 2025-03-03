import Axios from "axios"

// 🚨 TROQUE PELO SEU IP!
export const api_sigmed = Axios.create({
  baseURL: "http://localhost:9090"
})
