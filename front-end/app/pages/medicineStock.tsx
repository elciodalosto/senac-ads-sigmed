import { api_sigmed } from "@/api/axios"
import { Link } from "expo-router"
import { useEffect, useState } from "react"
import { Image, StyleSheet, Text, View } from "react-native"

interface User {
  id: number
  name: string
  email: string
  password: string
  role: string
  createdAt: Date
  prescriptions?: string[]
  treatments?: string[]
}

export default function Home() {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)

  const fetchUsers = async () => {
    setLoading(true)
    try {
      const response = await api_sigmed.get("/user/getall")
      console.log("resultado ->", response.data)
      setUsers(response.data)
    } catch (error) {
      console.log("Erro:", error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchUsers()
  }, [])

  return (
    <View>
      <Text>Estoque de medicamentos</Text>
      {loading && <Text>Carregando...</Text>}
      {users.map((user: User) => (
        <View key={user.id}>
          <Text>{user.name}</Text>
          <Text>{user.email}</Text>
          <Text>{user.role}</Text>
        </View>
      ))}
    </View>
  )
}

const styles = StyleSheet.create({})
