import BackButton from "@/components/ui/BackButton";
import { StyleSheet, Text, View } from "react-native";

export default function accountDeletion() {
  return (
    <>
      <View style={styles.container}>
        <Text>EXCLUSÃO DE CONTA</Text>
        <Text>Em construção...</Text>
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
