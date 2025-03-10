import React from "react"
import { TouchableOpacity, Text, StyleSheet } from "react-native"
import { Plus } from "lucide-react-native"

interface PlusButtonProps {
  onPress: () => void
  size?: number
}

const PlusButton: React.FC<PlusButtonProps> = ({ onPress, size = 25 }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Plus size={size} color="#fff" />
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
    borderRadius: 30,
    elevation: 5,
    width: 50
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 8
  }
})

export default PlusButton
