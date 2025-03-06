import { useRouter } from "expo-router"
import { useEffect, useState } from "react"
import { View, Text, StyleSheet, ActivityIndicator } from "react-native"
import { api_sigmed } from "@/api/axios"
import { useLocalSearchParams } from "expo-router"

interface Patient {
  id: number
  name: string
  cpf: string
  birthDate: string
  gender: string
  medicalRecord: string
  createdAt: string
}

export default function PatientDetails() {
  const { patientId } = useLocalSearchParams<{ patientId: string }>()
  const [patient, setPatient] = useState<Patient | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  const fetchPatientDetails = async () => {
    try {
      const response = await api_sigmed.get(`/patient/get/${patientId}`)
      setPatient(response.data)
    } catch (err: any) {
      setError(err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (patientId) fetchPatientDetails()
  }, [patientId])

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#333" />
      </View>
    )
  }

  if (error) {
    return (
      <View style={styles.center}>
        <Text>Erro ao carregar os detalhes do paciente</Text>
      </View>
    )
  }

  if (!patient) {
    return (
      <View style={styles.center}>
        <Text>Paciente não encontrado</Text>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Perfil do paciente</Text>
      <Text style={styles.title}>{patient.name}</Text>
      <Text>CPF: {patient.cpf}</Text>
      <Text>
        Data de Nascimento: {new Date(patient.birthDate).toLocaleDateString()}
      </Text>
      <Text>Gênero: {patient.gender}</Text>
      <Text>Prontuário: {patient.medicalRecord}</Text>
      <Text>
        Cadastrado em: {new Date(patient.createdAt).toLocaleDateString()}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#fff" },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 20 },
  center: { flex: 1, justifyContent: "center", alignItems: "center" }
})
