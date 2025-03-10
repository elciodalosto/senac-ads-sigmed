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
import { SideEffect } from "@/types/sideEffect"
import Card from "@/components/Card"
import { SafeAreaView } from "react-native-safe-area-context"
import { HeartCrack } from "lucide-react-native"
import { SearchBar } from "@/components/SearchBar"
import ModalSideEffect from "@/components/ModalSideEffect"
import { Inventory, Medication } from "@/types/medication"
import { createSideEffect } from "@/api/services/createSideEffect"
import Toast from "react-native-toast-message"
import PlusButton from "@/components/PlusButton"

interface NewSideEffect {
  patientId: number
  medicationId: number
  description: string
}

export default function PatientSideEffectsPage() {
  const { patientId } = useLocalSearchParams<{ patientId: string }>()
  const [modalVisible, setModalVisible] = useState(false)
  const [patient, setPatient] = useState<Patient | null>(null)
  const [sideEffects, setSideEffects] = useState<SideEffect[]>([])
  const [medications, setMedications] = useState<Medication[]>([])
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

  const fetchInventoryMedications = async () => {
    try {
      const response = await api_sigmed.get(`/inventory/getall`)
      const onlyMedications = response.data.map(
        (item: Inventory) => item.medication
      )
      setMedications(onlyMedications)
    } catch (err: any) {
      setError(err)
    } finally {
      setLoading(false)
    }
  }

  const handleCreateSideEffect = async (data: NewSideEffect) => {
    try {
      await createSideEffect(data)
      await fetchPatientSideEffects()
      setModalVisible(false)
      Toast.show({
        type: "success",
        text1: "Efeito colateral adicionado com sucesso",
        position: "top",
        visibilityTime: 1500
      })
    } catch (error) {
      Toast.show({
        type: "error",
        text1: "Erro ao adicionar erro colateral",
        position: "top"
      })
      console.log(error)
    }
  }

  const handleDeleteSideEffect = async (id: number) => {
    try {
      await api_sigmed.delete(`/sideeffect/delete/${id}`)
      await fetchPatientSideEffects()
      Toast.show({
        type: "success",
        text1: "Efeito colateral deletado com sucesso",
        visibilityTime: 1500,
        position: "top"
      })
    } catch (error) {
      Toast.show({
        type: "error",
        text1: "Erro ao deletar efeito colateral",
        position: "top"
      })
      console.log(error)
    }
  }

  useEffect(() => {
    if (patientId) {
      fetchPatientInfo()
      fetchPatientSideEffects()
      fetchInventoryMedications()
    }
  }, [patientId])

  const filteredSideEffects = sideEffects.filter((item: SideEffect) =>
    item?.description.toLowerCase().includes(searchText.toLowerCase())
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
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff", padding: 15 }}>
      <View style={styles.headerPerfilContainer}>
        <HeartCrack size={50} color="black" />
        <Text style={styles.title}>Efeitos colaterais</Text>
        <Text style={styles.title}>{patient.name}</Text>
      </View>

      <View style={styles.searchBarContainer}>
        <PlusButton size={25} onPress={() => setModalVisible(true)} />
        <SearchBar
          placeholder="Pesquise o efeito colateral"
          value={searchText}
          onChangeText={setSearchText}
        />
      </View>

      <View>
        <ModalSideEffect
          visible={modalVisible}
          onClose={() => setModalVisible(false)}
          onSave={handleCreateSideEffect}
          medications={medications}
          data={{ patientId: Number(patientId) }}
        />
      </View>

      <ScrollView contentContainerStyle={styles.container}>
        {filteredSideEffects.map((sideEffect: SideEffect, index) => (
          <Card
            key={index}
            title={sideEffect.description}
            description={`Medicamento: ${sideEffect.medication.name}`}
            backgroundColor="#f0f8ff"
            borderColor="#87cefa"
            showDelete={true}
            onDelete={() => handleDeleteSideEffect(sideEffect.id)}
          />
        ))}
      </ScrollView>

      <BackButton />
      <Toast />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  searchBarContainer: {
    marginTop: 10,
    alignItems: "center",
    justifyContent: "space-between",
    gap: 20
  },
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
    backgroundColor: "#fff",
    marginTop: "-10%"
  },
  title: { fontSize: 24, fontWeight: "bold", marginBottom: 10 },
  subtitle: {
    fontSize: 17,
    fontWeight: "bold"
  },
  center: { justifyContent: "center", alignItems: "center" }
})
