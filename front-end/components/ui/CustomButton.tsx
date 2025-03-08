import React from "react"
import { TouchableOpacity, Text, StyleSheet } from "react-native"

interface IProps {
  title: string
  color?: string
  onPress?: () => void
}

const CustomButton = ({ title, color = "#64FCD9", onPress }: IProps) => {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: color }]}
      activeOpacity={0.8}
      onPress={onPress}
    >
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5
  },
  buttonText: {
    color: "black",
    fontWeight: "600",
    fontSize: 16,
    textAlign: "center"
  }
})

export default CustomButton
