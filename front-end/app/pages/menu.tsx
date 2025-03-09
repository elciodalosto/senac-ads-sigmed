import { ThemedText } from "@/components/ThemedText";
import { useAuth } from "@/context/authContext";
import { useNavigation, useRouter } from "expo-router";
import { useLayoutEffect } from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
} from "react-native";

export default function MyMenu() {
  const navigation = useNavigation();
  const { user, logout } = useAuth();
  const router = useRouter();
  let headerTitle: string;

  useLayoutEffect(() => {
    if (user?.name) {
      headerTitle = user.name;
    } else {
      headerTitle = "Nome do usuário";
    }

    navigation.setOptions({
      title: headerTitle,
      headerBackVisible: false,
    });
  }, [user, navigation]);

  const handleLogout = () => {
    logout();
    router.replace("/pages/login");
  };

  return (
    <>
      <View style={styles.container}>
        <Text style={{ fontSize: 24, fontWeight: "bold" }}>Menu principal</Text>
        <View style={styles.cards}>
          <View>
            <Image
              source={require("@/assets/images/adaptive-icon.png")}
              style={styles.sigmedLogo}
            />
          </View>
          <TouchableOpacity
            style={styles.prosseguir}
            onPress={() => router.navigate("/pages/patientSearch")}
          >
            <ThemedText type="link">BUSCAR PACIENTES</ThemedText>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.prosseguir}
            onPress={() => router.navigate("/pages/sideEffects")}
          >
            <ThemedText type="link">EFEITOS COLATERAIS</ThemedText>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.prosseguir}
            onPress={() => router.navigate("/pages/medicineStock")}
          >
            <ThemedText type="link">ESTOQUE DE MEDICAMENTOS</ThemedText>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.prosseguir}
            onPress={() => router.navigate("/pages/settings")}
          >
            <ThemedText type="link">CONFIGURAÇÕES DA CONTA</ThemedText>
          </TouchableOpacity>

          <TouchableOpacity onPress={handleLogout} style={styles.sair}>
            <Text style={{ color: "#FFF" }}> Sair da conta </Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
    marginBottom: "20%",
    zIndex: -1,
  },
  prosseguir: {
    padding: 10,
    width: "90%",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    borderRadius: 10,
    backgroundColor: "#64FCD9",
    color: "#000",
    fontWeight: "bold",
    marginBottom: 15,
  },
  cards: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "90%",
    gap: 10,
    zIndex: 1,
  },
  sigmedLogo: {
    width: Dimensions.get("window").width * 0.6,
    height: Dimensions.get("window").width * 0.6,
    resizeMode: "contain",
  },
  sair: {
    backgroundColor: "#2C2C2C",
    display: "flex",
    alignItems: "center",
    padding: 10,
    width: "90%",
    borderRadius: 10,
  },
});
