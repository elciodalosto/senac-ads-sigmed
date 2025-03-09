import BackButton from "@/components/ui/BackButton";
import { StyleSheet, Text, View } from "react-native";

export default function Help() {
  return (
    <View style={styles.stepContainer}>
      <Text>CENTRAL DE AJUDA</Text>
      <Text>Contatos da SIGMED</Text>
      <Text>Telefones</Text>
      <Text>E-mails</Text>
      <Text>Social</Text>
      <Text>Recurso extra - não planejado para o projeto</Text>
      <BackButton />
    </View>
  );
}

const styles = StyleSheet.create({
  stepContainer: {
    width: "100%",
    alignItems: "center"
  },
});
