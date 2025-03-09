import { Dimensions, Image, StyleSheet, Text, View } from "react-native";

import { HelloWave } from "@/components/HelloWave";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Link } from "expo-router";
import { Collapsible } from "@/components/Collapsible";
import { router } from "expo-router";
import { TouchableOpacity } from "react-native";

export default function HomeScreen() {
  const onPressFunction = () => {
    router.push("/pages/menu");
  };
  return (
    <View style={styles.view}>
      <View style={styles.titleContainer}>
        <Text style={[styles.title, styles.blackText]}>SIGMED</Text>
        <HelloWave />
      </View>
      <View style={styles.contentContainer}>
        <View style={styles.stepContainer}>
          <Text style={[styles.subtitle, styles.blackText]}>
            Sistema de gestão da Saúde Clínica
          </Text>
          <View style={styles.imageContainer}>
            <Image
              source={require("@/assets/images/adaptive-icon.png")}
              style={styles.sigmedLogo}
            />
          </View>
          <View style={styles.listaContainer}>
              <Text style={styles.subtitleLista}>Gerencie com facilidade</Text>
              {"\n"}
              <Text>* MEDICAMENTOS</Text>
              {"\n"}
              <Text>* PACIENTES</Text>
              {"\n"}
              <Text>* SINTOMAS</Text>
              {"\n"}
              <Text>* EFEITOS COLATERAIS</Text>
              {"\n"}
            </ThemedText>
          </ThemedView>
        </ThemedView>
      </View>

      <ThemedView style={styles.stepContainer}>
        <TouchableOpacity
          style={styles.prosseguir}
          onPress={() => router.navigate("/pages/login")}
        >
          <ThemedText type="link">PROSSEGUIR</ThemedText>
        </TouchableOpacity>
      </ThemedView>
    </View>
  );
}


const styles = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 50,
    paddingBottom: 50,
    backgroundColor: "#FFFFFF", // Fundo sempre branco
  },
  blackText: {
    color: "#000", // Força o texto preto
  },
  contentContainer: {
    width: "100%",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    width: "100%",
    alignItems: "center",
    marginBottom: 20,
  },
  title: {
    textAlign: "center",
    fontSize: 32,
    fontWeight: "bold",
  },
  subtitle: {
    textAlign: "center",
    fontSize: 16,
    marginBottom: 10,
    width: "100%",
  },
  sigmedLogo: {
    width: Dimensions.get("window").width * 0.6,
    height: Dimensions.get("window").width * 0.6,
    resizeMode: "contain",
  },
  imageContainer: {
    width: "100%",
    alignItems: "center",
    marginBottom: 20,
  },
  listaContainer: {
    width: "100%",
    alignItems: "flex-start",
    paddingHorizontal: 20,
    marginBottom: 20,
    gap: 5
  },
  lista: {
    textAlign: "left",
    fontWeight: "600",
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
  },
  prosseguirText: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 16
  },
  subtitleLista: {
    fontWeight: "bold",
  },
  listaItems: {
    gap: 1
  }
});