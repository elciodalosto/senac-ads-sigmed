import BackButton from "@/components/ui/BackButton";
import { Link, useLocalSearchParams } from "expo-router";
import { Image, StyleSheet, Text, View } from "react-native";

export default function PatientTreatmentsPage() {
  const { patientId } = useLocalSearchParams<{ patientId: string }>();
  return (
    <>
      <View style={styles.container}>
        <Text>Tratamentos do paciente</Text>
        <View style={styles.container}>
          <BackButton />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#fff" },
});
