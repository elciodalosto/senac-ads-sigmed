import BackButton from "@/components/ui/BackButton";
import { Stack } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: "Oops!" }} />
      <View style={styles.stepContainer}>
        <Text> </Text>
        <Text style={styles.aviso}>Esta rota não existe!</Text>
        <BackButton />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  aviso: {
    fontSize: 28,
  },
  stepContainer: {
    width: "100%",
    alignItems: "center",
    marginBottom: 20,
  },
});
