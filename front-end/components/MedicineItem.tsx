import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Medicine } from "../components/tempInterfaces/Patient";

interface MedicineItemProps {
  medicine: Medicine;
}

const MedicineItem: React.FC<MedicineItemProps> = ({ medicine }) => (
  <View style={styles.container}>
    <Text style={styles.title}>{medicine.name}</Text>
    <Text style={styles.description}>{medicine.description}</Text>
    <Text style={styles.sideEffectsTitle}>Efeitos Colaterais:</Text>
    {medicine.sideEffects.map((effect, index) => (
      <Text key={index} style={styles.sideEffect}>
        - {effect}
      </Text>
    ))}
  </View>
);

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
  description: {
    fontSize: 14,
    marginBottom: 5,
  },
  sideEffectsTitle: {
    fontSize: 14,
    fontWeight: "bold",
    marginTop: 5,
  },
  sideEffect: {
    fontSize: 14,
  },
});

export default MedicineItem;
