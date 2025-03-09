import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { router } from "expo-router";

const BackButton = () => {
  return (
    <TouchableOpacity style={styles.voltar} onPress={() => router.back()}>
      <Text style={styles.textVoltar}>VOLTAR</Text>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  voltar: {
    position: "fixed",
    paddingVertical: 15,
    width: "80%",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    borderRadius: 15,
    backgroundColor: "#333",
  },
  textVoltar: {
    color: "#FFFFFF",
    fontSize: 18,
  },
});

export default BackButton;
