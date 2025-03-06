import React from "react"
import { View, TextInput, StyleSheet } from "react-native"
import { Search } from "lucide-react-native"

interface SearchBarProps {
  placeholder?: string
  value: string
  onChangeText: (text: string) => void
}

export const SearchBar: React.FC<SearchBarProps> = ({
  placeholder = "Buscar...",
  value,
  onChangeText
}) => {
  return (
    <View style={styles.searchContainer}>
      <TextInput
        style={styles.searchInput}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
      />
      <Search size={20} />
    </View>
  )
}

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
    borderRadius: 10,
    padding: 5,
    marginBottom: 20
  },
  searchInput: { flex: 1, padding: 5 }
})
