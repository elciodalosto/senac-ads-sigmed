import { ThemedText } from "@/components/ThemedText";
import { Link } from "expo-router";
import { useRouter } from "expo-router";
import { View, Text, Button, StyleSheet, TextInput, Alert, Pressable, TouchableOpacity } from "react-native";
import { useState } from 'react'
import { Ionicons } from "@expo/vector-icons";


export default function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  const handleLogin = () => {
    if (!email.trim() || !password.trim()) {
      Alert.alert("Erro", "Por favor, preencha todos os campos.")
      return;
    }
    
    Alert.alert("Sucesso", "Login realizado com sucesso!", [
      { text: 'OK', onPress: () => router.push("/pages/menu")}
    ])
    const userData = {
      email,
      password,
    };
    console.log(JSON.stringify(userData))
  }

  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 32, fontWeight: "500" }} >Faça seu login</Text>
      <View style={styles.logincard}>  
        <View style={styles.inputContainer}>
          <Text>Email</Text>
          <TextInput value={email} onChangeText={setEmail} placeholder="exemplo@email.com" style={styles.input}/>
        </View>
        <View style={styles.inputContainer}>
          <Text>Senha</Text>
          <TextInput
            secureTextEntry={!showPassword}
            value={password}
            onChangeText={setPassword}
            placeholder="********"
            style={styles.input}
          />
            <TouchableOpacity style={styles.eye} onPress={() => setShowPassword(!showPassword)}>
            <Ionicons name={showPassword ? "eye-off" : "eye"} size={24} color="gray" />
          </TouchableOpacity>
        </View>
        <Link href={`/pages/passwordRecovery?email=${encodeURIComponent(email)}`}>
          <Text style={{textDecorationLine: "underline"}} >Esqueceu sua senha?</Text>
        </Link>
        <Pressable onPress={handleLogin} style={styles.login}>
          <Text style={{color: "#FFF", fontSize: 16}}>Entrar</Text>
        </Pressable>
        <Text>Ainda não tem conta?
        <Pressable onPress={() => console.log("admin do app")}>
          <Text style={{fontWeight: "bold"}}>Solicite seu acesso ao administrador do app</Text>
        </Pressable>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    padding: 32
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
    height: "70%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 20,
    padding: 16
  },
  inputContainer: {
    width: "100%",
    gap: 7
  },
  input: {
    borderColor: "#78787887",
    borderWidth: 1,
    borderRadius: 10,
    paddingLeft: 10,
    color: "#1e1e1e78"
  },
  eye: {
    position: "absolute",
    right: 10,
    top: "50%",
  }
});
