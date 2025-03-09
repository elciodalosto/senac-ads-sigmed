import BackButton from "@/components/ui/BackButton";
import { router } from "expo-router";
import { Alert, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Home() {
  return (
    <>
      <View style={styles.container}>
        <Text
          onLayout={() =>
            Alert.alert(
              "Aviso",
              "As Features da tela de Configurações não estão previstas como parte da entrega do Projeto Integrador.\n\nSão apenas para exemplo de possíveis recursos para se implementar neste app"
            )
          }
        ></Text>
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
        </View>
        <View style={styles.container}>
          <BackButton />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#fff" },
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
    width: "90%",
    fontWeight: "bold",
    color: "#333",
    fontSize: 22,
    borderRadius: 15,
    borderColor: "#333",
    borderWidth: 2,
    padding: 15,
  },
  titleContainer: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 30,
    top: 55,
  },
});
