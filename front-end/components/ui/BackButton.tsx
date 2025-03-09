import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { useRouter } from "expo-router";
import { ArrowLeft } from "lucide-react-native";

const BackButton = () => {
  const router = useRouter();

  const handleGoBack = () => {
    router.back();
  };

  return (
    <TouchableOpacity
      onPress={handleGoBack}
      style={{
        flexDirection: "column",
        alignItems: "center",
        alignSelf: "center",
        justifyContent: "center",
        backgroundColor: "#333",
        borderRadius: 10,
        padding: 10,
        position: "absolute",
        bottom: 100,
        left: 20,
        right: 20,
        zIndex: 99,
      }}
    >
      {" "}
      <Text
        style={{
          marginLeft: 5,
          color: "#ffff",
          fontSize: 17,
          fontWeight: "bold",
        }}
      >
        Voltar
      </Text>
    </TouchableOpacity>
  );
};

export default BackButton;
