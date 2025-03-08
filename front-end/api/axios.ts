import Axios from "axios"
import { SIGMED_API_URL, SIGMED_API_PORT } from "@env"

export const api_sigmed = Axios.create({
  baseURL: `${SIGMED_API_URL}:${SIGMED_API_PORT}`
})
