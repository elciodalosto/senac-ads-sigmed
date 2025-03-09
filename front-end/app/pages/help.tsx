import BackButton from "@/components/ui/BackButton";
import { StyleSheet, Text, View } from "react-native";

export default function Help() {
  return (
    <>
      <View style={styles.container}>
        <Text>CENTRAL DE AJUDA</Text>
        <Text>Contatos da SIGMED</Text>
        <Text>Telefones</Text>
        <Text>E-mails</Text>
        <Text>Social</Text>
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
