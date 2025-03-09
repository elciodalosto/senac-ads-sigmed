import Axios from "axios";
import Constants from 'expo-constants';

const apiUrl = Constants.expoConfig?.extra?.API_URL;

export const api_sigmed = Axios.create({
  baseURL: apiUrl,
});
