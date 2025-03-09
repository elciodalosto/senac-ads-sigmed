import BackButton from "@/components/ui/BackButton";
import { Link } from "expo-router";
import { Image, StyleSheet, Text, View } from "react-native";

export default function Localization() {
  return (
    <>
      <View style={styles.container}>
        <Text>Localização</Text>
        <Text>
          Em construção... solicitar permissão de localização para o que?
        </Text>
        <View style={styles.container}>
          <BackButton />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#fff" },
});
