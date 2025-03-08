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
    <ThemedView style={styles.view}>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title" style={styles.title}>
          SIGMED
        </ThemedText>
        <HelloWave />
      </ThemedView>
      <View style={styles.contentContainer}>
        <ThemedView style={styles.stepContainer}>
          <ThemedText type="subtitle" style={styles.subtitle}>
            Sistema de gestão da Saúde Clínica
          </ThemedText>
          <ThemedView style={styles.imageContainer}>
            <Image
              source={require("@/assets/images/adaptive-icon.png")}
              style={styles.sigmedLogo}
            />
          </ThemedView>
          <ThemedView style={styles.listaContainer}>
            <ThemedText style={styles.lista}>
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
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    width: "100%",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  view: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 50,
    paddingBottom: 50,
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
  },
  lista: {
    textAlign: "left",
    color: "#444",
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
  subtitleLista: {
    fontWeight: "bold",
    fontSize: 22
  },
});
