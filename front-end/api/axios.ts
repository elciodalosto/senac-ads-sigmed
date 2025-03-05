import Axios from "axios"
import Config from "react-native-config"

// Adicione seu IP 🚨
export const api_sigmed = Axios.create({
  baseURL: `http://000.00.00.00:9090`
})
