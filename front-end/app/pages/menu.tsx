import { ThemedText } from "@/components/ThemedText";
import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function Menu() {
  return (
    <View style={styles.container}>
      <Link href={"/pages/patientSearch"} style={styles.prosseguir}>
        <ThemedText type="link">BUSCAR PACIENTES</ThemedText>
      </Link>
      <Link href={"/pages/colateralEffects"} style={styles.prosseguir}>
        <ThemedText type="link">EFEITOS COLATERAIS</ThemedText>
      </Link>
      <Link href={"/pages/medicineStock"} style={styles.prosseguir}>
        <ThemedText type="link">ESTOQUE</ThemedText>
      </Link>
      <Link href={"/pages/settings"} style={styles.prosseguir}>
        <ThemedText type="link">CONFIGURAÇÕES</ThemedText>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  prosseguir: {
    padding: 10,
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
