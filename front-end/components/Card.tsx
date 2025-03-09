import React from "react"
import { View, Text, TouchableOpacity, StyleSheet } from "react-native"
import { Edit3, Trash2 } from "lucide-react-native"

type CardProps = {
  title: string
  description: string
  backgroundColor?: string
  borderColor?: string
  showEdit?: boolean
  showDelete?: boolean
  onEdit?: () => void
  onDelete?: () => void
}

const Card: React.FC<CardProps> = ({
  title,
  description,
  backgroundColor = "#fff",
  borderColor = "black",
  showEdit = false,
  showDelete = false,
  onEdit,
  onDelete
}) => {
  return (
    <View style={[styles.card, { backgroundColor, borderColor }]}>
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
      <View style={styles.icons}>
        {showEdit && (
          <TouchableOpacity
            key="edit-icon"
            onPress={onEdit}
            style={styles.iconButton}
          >
            <Edit3 color="#3498db" />
          </TouchableOpacity>
        )}
        {showDelete && (
          <TouchableOpacity
            key="delete-icon"
            onPress={onDelete}
            style={styles.iconButton}
          >
            <Trash2 color="#e74c3c" />
          </TouchableOpacity>
        )}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderRadius: 8,
    padding: 20,
    marginVertical: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  content: {
    flex: 1,
    marginRight: 8
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 4,
    maxWidth: "90%"
  },
  description: {
    fontSize: 14,
    color: "#666",
    maxWidth: "90%"
  },
  icons: {
    flexDirection: "row",
    alignItems: "center"
  },
  iconButton: {
    marginLeft: 8
  }
})

export default Card
