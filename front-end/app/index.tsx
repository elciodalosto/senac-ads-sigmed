import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import { HelloWave } from "@/components/HelloWave";
import { router } from "expo-router";
import { TouchableOpacity } from "react-native";
import React from "react";

export default function HomeScreen() {
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
            <View style={styles.listaItems}>
              <Text style={styles.subtitleLista}>Gerencie com facilidade</Text>
              <Text> - MEDICAMENTOS</Text>
              <Text> - PACIENTES</Text>
              <Text> - SINTOMAS</Text>
              <Text> - EFEITOS COLATERAIS</Text>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.stepContainer}>
        <TouchableOpacity
          style={styles.prosseguir}
          onPress={() => router.navigate("/pages/login")}
        >
          <Text style={styles.prosseguirText}>PROSSEGUIR >></Text>
        </TouchableOpacity>
      </View>
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
  },
  title: {
    textAlign: "center",
    fontSize: 32,
    fontWeight: "bold",
  },
  subtitle: {
    textAlign: "center",
    fontSize: 22,
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
  },
  listaContainer: {
    width: "100%",
    alignItems: "flex-start",
    padding: 25,
    marginBottom: 40,
    borderRadius: 12,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 9,

  },
  lista: {
    textAlign: "left",
    fontWeight: "600",
    
  },
  prosseguir: {
    padding: 10,
    width: "90%",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    borderRadius: 10,
    backgroundColor: "#64FCD9",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  prosseguirText: {
    color: "#555",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 18,
  },
  subtitleLista: {
    fontWeight: "bold",
    fontSize: 18,
  },
  listaItems: {
    gap: 8,
    width: "100%",
    alignItems: "flex-start",
  },
});
