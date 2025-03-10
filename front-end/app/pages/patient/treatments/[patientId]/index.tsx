import { useEffect, useState } from "react"
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  ScrollView
} from "react-native"
import { api_sigmed } from "@/api/axios"
import { useLocalSearchParams } from "expo-router"
import BackButton from "@/components/ui/BackButton"
import { Patient } from "@/types/patient"
import { SafeAreaView } from "react-native-safe-area-context"
import { ClipboardPlus } from "lucide-react-native"
import { Treatment } from "@/types/treatment"
import TreatmentCard from "@/components/TreatmentCard"
import { SearchBar } from "@/components/SearchBar"

export default function PatientTreatmentsPage() {
  const { patientId } = useLocalSearchParams<{ patientId: string }>()
  const [patient, setPatient] = useState<Patient | null>(null)
  const [patientTreatments, setPatientTreatments] = useState<Treatment[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)
  const [searchText, setSearchText] = useState("")

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

  const fetchPatientTreatments = async () => {
    try {
      const response = await api_sigmed.get(`/treatment/getall/${patientId}`)
      setPatientTreatments(response.data)
    } catch (err: any) {
      setError(err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (patientId) {
      fetchPatientInfo()
      fetchPatientTreatments()
    }
  }, [patientId])

  const filteredTreatments = patientTreatments.filter((treatment: Treatment) =>
    treatment.description.toLowerCase().includes(searchText.toLowerCase())
  )

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
        <Text>Erro ao carregar os tratamentos do paciente</Text>
      </View>
    )
  }

  if (!patient) {
    return (
      <View style={styles.center}>
        <Text>Tratamentos não encontrados</Text>
      </View>
    )
  }

  return (
    <>
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: "#fff",
          paddingHorizontal: 10
        }}
      >
        <View style={styles.headerPerfilContainer}>
          <ClipboardPlus
            size={70}
            color="black"
            style={{
              marginBottom: 10
            }}
          />
          <Text style={styles.title}>Tratamentos </Text>
          <Text style={styles.title}>{patient.name} </Text>
        </View>
        <SearchBar
          placeholder="Pesquise o tratamento"
          value={searchText}
          onChangeText={setSearchText}
        />

        <ScrollView contentContainerStyle={styles.container}>
          {filteredTreatments.map((treatment: Treatment, index) => (
            <TreatmentCard
              key={index}
              title={treatment.description}
              data={treatment.prescriptions}
              description="Prescrições"
              backgroundColor="#f0f8ff"
              borderColor="#87cefa"
            />
          ))}
        </ScrollView>
        <BackButton />
      </SafeAreaView>
    </>
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
    gap: 20
  },
  headerPerfilContainer: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff"
  },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 10 },
  subtitle: {
    fontSize: 17,
    fontWeight: "bold"
  },
  center: { justifyContent: "center", alignItems: "center" }
})
