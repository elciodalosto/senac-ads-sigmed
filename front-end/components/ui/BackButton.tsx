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
        padding: 10,
        backgroundColor: "#F0F0F0",
        borderRadius: 8,
        width: "50%",
        marginBottom: 20
      }}
    >
      <ArrowLeft size={20} color="#333" />
      <Text
        style={{
          marginLeft: 5,
          color: "#333",
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
