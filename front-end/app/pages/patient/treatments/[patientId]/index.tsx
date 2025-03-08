import { Link, useLocalSearchParams } from "expo-router"
import { Image, StyleSheet, Text, View } from "react-native"

export default function PatientTreatmentsPage() {
  const { patientId } = useLocalSearchParams<{ patientId: string }>()
  return (
    <View>
      <Text>Tratamentos do paciente</Text>
    </View>
  )
}

const styles = StyleSheet.create({})
