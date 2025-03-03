import { useRouter } from "expo-router";
import { View, Text, Button, StyleSheet } from "react-native";

export default function Login() {
  const router = useRouter();

  const handleNavegar = () => {
    router.push("/home");
  };

  return (
    <View>
      <Text>Faça seu login</Text>
      <Button title="Entrar" onPress={handleNavegar} />
    </View>
  );
}

const styles = StyleSheet.create({});
