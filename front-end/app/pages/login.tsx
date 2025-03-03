import { ThemedText } from "@/components/ThemedText";
import { Link } from "expo-router";
import { useRouter } from "expo-router";
import { View, Text, Button, StyleSheet } from "react-native";

export default function Login() {
  const router = useRouter();

  // const handleNavegar = () => {
  //   router.push("/menu");
  // };

  return (
    <View>
      <Text>Faça seu login</Text>
      <Link href={"/pages/menu"} style={styles.login}>
        <ThemedText type="link">LOGIN</ThemedText>
      </Link>

      {/* <Button title="Entrar" onPress={handleNavegar} /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  login: {
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
  },
});
