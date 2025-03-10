import React from "react"
import { TouchableOpacity, Text, StyleSheet } from "react-native"
import { Plus } from "lucide-react-native"

interface PlusButtonProps {
  onPress: () => void
}

const PlusButton: React.FC<PlusButtonProps> = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Plus size={24} color="#fff" />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#4CAF50",
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 30,
    elevation: 5
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 8
  }
})

export default PlusButton
