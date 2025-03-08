import { ThemedText } from "@/components/ThemedText";
import { Link, router } from "expo-router";
import { StyleSheet, TouchableOpacity, View } from "react-native";

export default function Menu() {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.prosseguir}
        onPress={() => router.navigate("/pages/patientSearch")}
      >
        <ThemedText type="link">BUSCAR PACIENTES</ThemedText>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.prosseguir}
        onPress={() => router.navigate("/pages/sideEffects")}
      >
        <ThemedText type="link">EFEITOS COLATERAIS</ThemedText>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.prosseguir}
        onPress={() => router.navigate("/pages/medicineStock")}
      >
        <ThemedText type="link">ESTOQUE DE MEDICAMENTOS</ThemedText>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.prosseguir}
        onPress={() => router.navigate("/pages/settings")}
      >
        <ThemedText type="link">CONFIGURAÇÕES DA CONTA</ThemedText>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  prosseguir: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    width: "80%",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    borderRadius: 15,
    backgroundColor: "#64FCD9",
    color: "#000",
    fontWeight: "bold",
    marginBottom: 15,
  },
});
