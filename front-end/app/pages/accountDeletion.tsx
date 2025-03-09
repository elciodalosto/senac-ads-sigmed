import BackButton from "@/components/ui/BackButton";
import { StyleSheet, Text, View } from "react-native";

export default function accountDeletion() {
  return (
    <View style={styles.stepContainer}>
      <Text>EXCLUSÃO DE CONTA</Text>
      <Text>Recurso extra - não planejado para o projeto</Text>
      <BackButton styles={{position: "absolute", color: "red"}}/>
    </View>
  );
}

const styles = StyleSheet.create({
  stepContainer: {
    width: "100%",
    alignItems: "center",
    marginBottom: 20,
  },
});
