import {
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View
} from "react-native"
import React, { useState, useEffect } from "react"
import { api_sigmed } from "@/api/axios"
import { Search, User } from "lucide-react-native"
import { SearchBar } from "@/components/SearchBar"
import { useRouter } from "expo-router"
import BackButton from "@/components/ui/BackButton"

interface Patient {
  id: number
  name: string
  cpf: string
  birthDate: Date
  gender: string
  medicalRecord: string
  createdAt: Date
}

export default function PatientList() {
  const [patientList, setPatientList] = useState([])
  const [loading, setLoading] = useState(true)
  const [searchText, setSearchText] = useState("")
  const [error, setError] = useState<Error | null>(null)
  const router = useRouter()

  const fetchPatients = async () => {
    setLoading(true)
    try {
      const response = await api_sigmed.get("/patient/getall")
      setPatientList(response.data)
    } catch (error) {
      console.log("Erro:", error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchPatients()
  }, [])

  const filteredPatients = patientList.filter((item: Patient) =>
    item?.name.toLowerCase().includes(searchText.toLowerCase())
  )

  if (error) {
    return (
      <View>
        <Text>Erro: {error.message}</Text>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Buscar pacientes</Text>
      <SearchBar
        placeholder="Pesquise o paciente"
        value={searchText}
        onChangeText={setSearchText}
      />
      {loading ? (
        <Text>Carregando...</Text>
      ) : (
        <FlatList
          data={filteredPatients}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }: { item: Patient }) => (
            <Pressable
              style={styles.card}
              onPress={() => router.push(`/pages/patient/perfil/${item.id}`)}
            >
              <User size={24} />
              <Text style={styles.patientName}>{item?.name}</Text>
            </Pressable>
          )}
        />
      )}
      <BackButton />
    </View>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#fff" },
  username: { fontSize: 18, color: "#333", marginBottom: 10 },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
    borderRadius: 10,
    padding: 5,
    marginBottom: 20
  },
  searchInput: { flex: 1, padding: 5 },
  searchIcon: { marginRight: 5 },
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderWidth: 2,
    borderColor: "#e0e0e0",
    borderRadius: 10,
    padding: 15,
    marginBottom: 10
  },
  icon: { marginRight: 10 },
  patientName: { fontSize: 16, flex: 1, paddingLeft: 10 },
  quantity: { fontSize: 14, color: "#888" },
  backButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#333",
    borderRadius: 10,
    padding: 10,
    marginTop: 20
  },
  backButtonText: { color: "#fff", marginLeft: 5 }
})
