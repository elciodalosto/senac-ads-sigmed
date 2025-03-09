import BackButton from "@/components/ui/BackButton";
import { StyleSheet, Text, View } from "react-native";

export default function SideEffects() {
  return (
    <>
      <View style={styles.container}>
        <Text>EFEITOS COLATERAIS NO PACIENTE</Text>
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
