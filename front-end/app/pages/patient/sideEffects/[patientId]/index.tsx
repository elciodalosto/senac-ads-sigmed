import { useEffect, useState } from "react"
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  ScrollView,
  Button
} from "react-native"
import { api_sigmed } from "@/api/axios"
import { useLocalSearchParams } from "expo-router"
import BackButton from "@/components/ui/BackButton"
import { Patient } from "@/types/patient"
import { SideEffect } from "@/types/sideEffect"
import Card from "@/components/Card"
import CustomButton from "@/components/ui/CustomButton"
import { SafeAreaView } from "react-native-safe-area-context"

export default function PatientSideEffectsPage() {
  const { patientId } = useLocalSearchParams<{ patientId: string }>()
  const [patient, setPatient] = useState<Patient | null>(null)
  const [sideEffects, setSideEffects] = useState<SideEffect[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  const fetchPatientInfo = async () => {
    try {
      const response = await api_sigmed.get(`/patient/get/${patientId}`)
      setPatient(response.data)
    } catch (err: any) {
      setError(err)
    } finally {
      setLoading(false)
    }
  }

  const fetchPatientSideEffects = async () => {
    try {
      const response = await api_sigmed.get(`/sideeffect/get/${patientId}`)
      setSideEffects(response.data)
    } catch (err: any) {
      setError(err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (patientId) {
      fetchPatientInfo()
      fetchPatientSideEffects()
    }
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
        <Text>Efeitos colaterais não encontrados</Text>
      </View>
    )
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.headerPerfilContainer}>
          <Text style={styles.title}>Efeitos colaterais</Text>
          <Text style={styles.title}>{patient.name}</Text>
        </View>

        <View style={styles.subtitlesContainer}>
          {sideEffects.map((sideEffect: SideEffect, index) => (
            <Card
              title={sideEffect.description}
              description={`Medicamento: ${sideEffect.medication.name}`}
              backgroundColor="#f0f8ff"
              borderColor="#87cefa"
            />
          ))}
        </View>
      </ScrollView>
      <BackButton />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    alignItems: "center",
    backgroundColor: "#fff"
  },
  subtitlesContainer: {
    width: "100%",
    padding: 20,
    borderTopWidth: 1,
    borderTopColor: "#ccc",
    gap: 20,
    height: "75%"
  },
  headerPerfilContainer: {
    alignItems: "center"
  },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 10 },
  subtitle: {
    fontSize: 17,
    fontWeight: "bold"
  },
  center: { flex: 1, justifyContent: "center", alignItems: "center" }
})
