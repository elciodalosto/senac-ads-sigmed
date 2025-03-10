import React from "react"
import { View, Text, TouchableOpacity, StyleSheet } from "react-native"
import { Edit3, Trash2 } from "lucide-react-native"
import { Prescription } from "@/types/treatment"

type CardProps = {
  title: string
  description: string
  data: Prescription[]
  backgroundColor?: string
  borderColor?: string
  showEdit?: boolean
  showDelete?: boolean
  onEdit?: () => void
  onDelete?: () => void
}

const TreatmentCard: React.FC<CardProps> = ({
  title,
  description,
  data,
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
        {data.map(prescription => (
          <View key={prescription.id} style={styles.prescriptionContainer}>
            <Text style={styles.date}>
              Prescrito em:{" "}
              {new Date(prescription.prescribedAt).toLocaleDateString()}
            </Text>
            {prescription.items.map(item => (
              <View key={item.id} style={styles.itemContainer}>
                <Text style={styles.description}>
                  • {item.dosage} - {item.frequency} - {item.duration}
                </Text>
              </View>
            ))}
          </View>
        ))}
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
  date: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#666",
    marginBottom: 4
  },
  description: {
    fontSize: 14,
    color: "#666",
    maxWidth: "90%"
  },
  prescriptionContainer: {
    marginBottom: 8
  },
  itemContainer: {
    paddingLeft: 8
  },
  icons: {
    flexDirection: "row",
    alignItems: "center"
  },
  iconButton: {
    marginLeft: 8
  }
})

export default TreatmentCard
