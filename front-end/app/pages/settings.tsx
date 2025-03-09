import { router } from "expo-router";
import { StyleSheet, Text, View } from "react-native";

export default function Home() {
  return (
    <View style={styles.stepContainer}>
      <View style={styles.menu}>
        <Text
          style={styles.menuBtn}
          onPress={() => router.navigate("/pages/passwordRecovery")}
        >
          Alterar a senha
        </Text>
        <Text
          style={styles.menuBtn}
          onPress={() => router.navigate("/pages/Localization")}
        >
          Localização
        </Text>
        <Text
          style={styles.menuBtn}
          onPress={() => router.navigate("/pages/notifications")}
        >
          Notificações
        </Text>
        <Text
          style={styles.menuBtn}
          onPress={() => router.navigate("/pages/accountDeletion")}
        >
          Excluir Conta
        </Text>
        <Text
          style={styles.menuBtn}
          onPress={() => router.navigate("/pages/help")}
        >
          Central de Ajuda
        </Text>
        <Text>{""}</Text>
        <Text>{""}</Text>
        <Text>{""}</Text>
        <Text style={styles.voltar} onPress={() => router.back()}>
          VOLTAR
        </Text>
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
    top: 120,
    gap: 25,
    width: "100%",
  },
  menuBtn: {
    textAlign: "center",
    alignContent: "center",
    justifyContent: "center",
    alignItems: "center",
    width: "60%",
    fontWeight: "bold",
    color: "#333",
    fontSize: 22,
    borderRadius: 15,
    borderColor: "#333",
    borderWidth: 2,
    padding: 5,
  },
  titleContainer: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 30,
    top: 55,
  },
  voltar: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    width: "80%",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    borderRadius: 15,
    backgroundColor: "#222222",
    color: "#fff",
    fontWeight: "bold",
  },
  stepContainer: {
    width: "100%",
    alignItems: "center",
    marginBottom: 20,
  },
});
