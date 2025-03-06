import { useRouter } from "expo-router"
import { useEffect, useState } from "react"
import { View, Text, StyleSheet, ActivityIndicator, Button } from "react-native"
import { api_sigmed } from "@/api/axios"
import { useLocalSearchParams } from "expo-router"
import { CircleUserRound } from "lucide-react-native"
import BackButton from "@/components/ui/BackButton"

interface Patient {
  id: number
  name: string
  cpf: string
  birthDate: string
  gender: string
  medicalRecord: string
  createdAt: string
}

export default function PatientPerfil() {
  const { patientId } = useLocalSearchParams<{ patientId: string }>()
  const [patient, setPatient] = useState<Patient | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  const fetchPatientPerfil = async () => {
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
    if (patientId) fetchPatientPerfil()
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
    <>
      <View style={styles.container}>
        <View style={styles.headerPerfilContainer}>
          <CircleUserRound size={70} color="black" />
          <Text style={styles.title}>{patient.name}</Text>
        </View>

        <View style={styles.subtitlesContainer}>
          <Text style={styles.subtitle}>CPF: {patient.cpf}</Text>
          <Text style={styles.subtitle}>
            Data de Nascimento:{" "}
            {new Date(patient.birthDate).toLocaleDateString()}
          </Text>
          <Text style={styles.subtitle}>Gênero: {patient.gender}</Text>
          <Text style={styles.subtitle}>
            Prontuário: {patient.medicalRecord}
          </Text>
          <Text style={styles.subtitle}>
            Cadastrado em: {new Date(patient.createdAt).toLocaleDateString()}
          </Text>
        </View>
        <BackButton />
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: "center",
    backgroundColor: "#fff"
  },
  subtitlesContainer: {
    width: "100%",
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: "#ccc",
    gap: 20,
    height: "77%"
  },
  headerPerfilContainer: {
    alignItems: "center"
  },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 20 },
  subtitle: {
    fontSize: 17,
    fontWeight: "bold"
  },
  center: { flex: 1, justifyContent: "center", alignItems: "center" }
})
