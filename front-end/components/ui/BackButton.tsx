import React from "react"
import { TouchableOpacity, Text } from "react-native"
import { useRouter } from "expo-router"
import { ArrowLeft } from "lucide-react-native"

const BackButton = () => {
  const router = useRouter()

  const handleGoBack = () => {
    router.back()
  }

  return (
    <TouchableOpacity
      onPress={handleGoBack}
      style={{
        flexDirection: "row",
        alignItems: "center",
        alignSelf: "center",
        justifyContent: "center",
        backgroundColor: "#333",
        borderRadius: 10,
        padding: 10,
        marginTop: 20,
        width: "80%"
      }}
    >
      <ArrowLeft size={20} color="#ffff" />
      <Text
        style={{
          marginLeft: 5,
          color: "#ffff",
          fontSize: 17,
          fontWeight: "bold"
        }}
      >
        Voltar
      </Text>
    </TouchableOpacity>
  )
}

export default BackButton
