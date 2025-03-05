import Axios from "axios"
import Config from "react-native-config"

export const api_sigmed = Axios.create({
  baseURL: `http://${Config.IP_LOCAL}:${Config.API_SIGMED_PORT}`
})
