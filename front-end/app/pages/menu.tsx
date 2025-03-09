import { ThemedText } from "@/components/ThemedText";
import BackButton from "@/components/ui/BackButton";
import { router } from "expo-router";
import {
  Dimensions,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";

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
      <Image
        source={require("@/assets/images/adaptive-icon.png")}
        style={styles.sigmedLogo}
      />
      <BackButton />
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
  sigmedLogo: {
    width: Dimensions.get("window").width * 0.5,
    height: Dimensions.get("window").width * 0.5,
    resizeMode: "contain",
  },
});
