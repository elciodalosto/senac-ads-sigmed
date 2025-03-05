import { ThemedText } from "@/components/ThemedText";
import { useAuth } from "@/context/authContext";
import { Link, useNavigation, useRouter } from "expo-router";
import { useContext, useLayoutEffect } from "react";
import { Image, StyleSheet, Text, View, Dimensions, Pressable } from "react-native";


export default function Menu() {
  const navigation = useNavigation()
  const {user, logout} = useAuth()
  const router = useRouter()

  useLayoutEffect(() => {
    if (user?.name) {
      navigation.setOptions({title: user.name})
    }
  }, [user, navigation])


  const handleLogout = () => {
    logout()
    router.replace("/pages/login")
  }
   
  return (
    <View style={styles.container}>
      <ThemedText style={{fontSize: 24, fontWeight: "bold"}}>Menu principal</ThemedText>

      <View style={styles.cards}>  
        <Link href={"/pages/patientSearch"} style={styles.prosseguir}>
          <ThemedText type="link">BUSCAR PACIENTES</ThemedText>
        </Link>
        <Link href={"/pages/medicineStock"} style={styles.prosseguir}>
          <ThemedText type="link">ESTOQUE</ThemedText>
        </Link>
        <Link href={"/pages/settings"} style={styles.prosseguir}>
          <ThemedText type="link">CONFIGURAÇÕES</ThemedText>
        </Link>
      </View>

      <View style={styles.footer}>
        <Image
          source={require("@/assets/images/adaptive-icon.png")}
          style={styles.sigmedLogo}
        />
        <Pressable onPress={handleLogout} style={styles.sair} >
          <Text style={{color: "#FFF"}}> SAIR </Text>
        </Pressable>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
    marginBottom: "20%"
  },
  prosseguir: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    width: "80%",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    borderRadius: 15,
    backgroundColor: "#64FCD9",
    color: "#000",
    fontWeight: "bold",
  },
  cards: {
    display: "flex",
    justifyContent: 'center',
    alignItems: 'center',
    width: "80%",
    gap: 10
  },
  sigmedLogo: {
    width: Dimensions.get("window").width * 0.6,
    height: Dimensions.get("window").width * 0.6,
    resizeMode: "contain",
  },
  footer: {
    // 
  },
  sair: {
    backgroundColor: "#2C2C2C",
    display: "flex",
    alignItems: "center",
    padding: 10,
    borderRadius: 10
  }
});
