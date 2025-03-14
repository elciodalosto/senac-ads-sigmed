import { Link } from "expo-router";
import { useRouter } from "expo-router";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Alert,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";
import { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { useAuth } from "@/context/authContext";

export default function Login() {
  const { login } = useAuth();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = async () => {
    if (!email.trim() || !password.trim()) {
      Alert.alert("Erro", "Por favor, preencha todos os campos.");
      return;
    }

    try {
      await login(email, password);
      router.replace("/pages/menu");
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "Erro desconhecido";
      Alert.alert("Erro", errorMessage);
    }
  };

  return (
    <>
      <View style={styles.container}>
        <Image
          source={require("@/assets/images/adaptive-icon.png")}
          style={styles.sigmedLogo}
        />
        <Text style={{ top: -25, fontSize: 42, fontWeight: "500" }}>
          Faça seu login
        </Text>
        <View style={styles.logincard}>
          <View style={styles.inputContainer}>
            <Text>Email</Text>
            <TextInput
              value={email}
              onChangeText={setEmail}
              placeholder="exemplo@email.com"
              style={styles.input}
            />
          </View>
          <View style={styles.inputContainer}>
            <Text>Senha</Text>
            <TextInput
              value={password}
              onChangeText={setPassword}
              secureTextEntry={!showPassword}
              placeholder="********"
              style={styles.input}
            />
            <TouchableOpacity
              style={styles.eye}
              onPress={() => setShowPassword(!showPassword)}
            >
              <Ionicons
                name={showPassword ? "eye-off" : "eye"}
                size={24}
                color="gray"
              />
            </TouchableOpacity>
          </View>
          <Link
            href={`/pages/passwordRecovery?email=${encodeURIComponent(email)}`}
          >
            <Text style={{ textDecorationLine: "underline" }}>
              Esqueceu sua senha?
            </Text>
          </Link>
          <TouchableOpacity
            onPress={() => router.push("/pages/menu")}
            style={styles.login}
          >
            {/* ANTES DE SUBIR O APP trocar o onPress para onPress={handleLogin} */}
            <Text style={{ color: "#FFF", fontSize: 16 }}>Entrar</Text>
          </TouchableOpacity>
          <View>
            <Text style={styles.naoTemConta}>
              Ainda não tem conta?
              <TouchableOpacity
                onPress={() =>
                  Alert.alert(
                    "Aviso",
                    "Cadastro de usuários é permitido apenas pelo setor responsável da sua instituição.\n\nEntre em contato com o administrador do aplicativo e solicite o seu."
                  )
                }
              >
                <Text>{""}</Text>
                <Text style={{ fontWeight: "bold", color: "royalblue" }}>
                  Solicite acesso ao administrador do app
                </Text>
              </TouchableOpacity>
            </Text>
          </View>
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
    gap: 5,
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
  sigmedLogo: {
    width: Dimensions.get("window").width * 0.5,
    height: Dimensions.get("window").width * 0.5,
    resizeMode: "contain",
  },
  naoTemConta: {
    // color: "royal",
    fontWeight: "bold",
    marginBottom: 30,
  },
});
