import BackButton from "@/components/ui/BackButton";
import { router } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Home() {
  return (
    <View style={styles.stepContainer}>
      <View style={styles.menu}>
        <TouchableOpacity
          style={styles.menuBtn}
          onPress={() => router.navigate("/pages/passwordRecovery")}
        >
          <Text>Alterar a senha</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.menuBtn}
          onPress={() => router.navigate("/pages/Localization")}
        >
          <Text>Localização</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.menuBtn}
          onPress={() => router.navigate("/pages/notifications")}
        >
          <Text>Notificações</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.menuBtn}
          onPress={() => router.navigate("/pages/accountDeletion")}
        >
          <Text>Excluir Conta</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.menuBtn}
          onPress={() => router.navigate("/pages/help")}
        >
          <Text>Central de Ajuda</Text>
        </TouchableOpacity>
        <Text>{""}</Text>
        <Text>{""}</Text>
        <Text>{""}</Text>
        <BackButton />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  menu: {
    textAlign: "center",
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 120,
    gap: 25,
    width: "100%",
  },
  menuBtn: {
    backgroundColor: "#fff",
    color: "#FFF",
    fontSize: 22,
    borderWidth: 2,
    borderRadius: 15,
    padding: 15,
    textAlign: "center",
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
    width: "60%",
    fontWeight: "bold",
  },
  stepContainer: {
    width: "100%",
    alignItems: "center",
  },
});
