import { router, useLocalSearchParams } from "expo-router";
import { View, Text, StyleSheet, TextInput, Pressable } from "react-native";
import { useState } from "react";

export default function PasswordRecovery() {
  const { email } = useLocalSearchParams();
  const [emailInput, setEmailInput] = useState(email || "");

  return (
    <>
      <View style={styles.container}>
        <Text style={{ fontSize: 32, fontWeight: "500" }}>Recuperar Senha</Text>
        <View style={styles.logincard}>
          <Text style={{ textAlign: "center" }}>
            Insira seu e-mail e enviaremos um link para recuperar sua senha.
          </Text>
          <View style={styles.inputContainer}>
            <Text>Email</Text>
            <TextInput
              value={String(emailInput)}
              onChangeText={setEmailInput}
              style={styles.input}
            />
          </View>
          <Pressable onPress={() => console.log(email)} style={styles.login}>
            <Text style={{ color: "#FFF", fontSize: 16 }}>Enviar</Text>
          </Pressable>
          <Pressable onPress={() => router.back()} style={styles.backButton}>
            <Text style={{ color: "#2c2c2c", fontSize: 16 }}>
              {" "}
              {"<"} Voltar
            </Text>
          </Pressable>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    paddingHorizontal: 32,
    paddingTop: 90,
  },
  login: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    borderRadius: 10,
    backgroundColor: "#2C2C2C",
    color: "#FFF",
    fontWeight: "bold",
  },
  backButton: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    borderRadius: 10,
    backgroundColor: "#ffffff",
    fontWeight: "bold",
    borderColor: "#2c2c2c",
    borderWidth: 1,
  },
  logincard: {
    borderWidth: 1.5,
    borderColor: "#7878788b",
    borderRadius: 10,
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 20,
    padding: 16,
  },
  inputContainer: {
    width: "100%",
    gap: 7,
  },
  input: {
    borderColor: "#78787887",
    borderWidth: 1,
    borderRadius: 10,
    paddingLeft: 10,
    color: "#1e1e1e78",
  },
  eye: {
    position: "absolute",
    right: 10,
    top: "50%",
  },
});
