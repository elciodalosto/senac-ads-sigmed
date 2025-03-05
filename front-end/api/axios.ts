import Axios from "axios"

//  Como ver o seu IP?

//  Windows
//  1 - No CMD, digite: ipconfig
//  2 - Procure por algo como: Endereço IPv4. . . . . . . . . . . . . : 192.168.x.x

//  Linux
// 1 - No terminal, digite: ifconfig
// 2 - Resultado: procure por inet para o IPv4 (ex: inet 192.168.x.x).

// Adicione seu IP 🚨
export const api_sigmed = Axios.create({
  baseURL: `http://000.00.00.00:9090`
})
