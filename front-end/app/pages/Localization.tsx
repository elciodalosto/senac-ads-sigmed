import BackButton from "@/components/ui/BackButton";
import { StyleSheet, Text, View } from "react-native";

export default function Localization() {
  return (
    <View style={styles.stepContainer}>
      <Text>Localização</Text>
      <Text>Recurso extra - não planejado para o projeto</Text>
      <BackButton />
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
