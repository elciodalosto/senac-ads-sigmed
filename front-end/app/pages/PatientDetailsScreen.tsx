import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  ScrollView,
} from "react-native";
import SideEffectsList from "../../components/SideEffectsList";
import MedicineItem from "../../components/MedicineItem";
import { Patient } from "../../components/tempInterfaces/Patient";

const PatientDetailsScreen: React.FC = () => {
  const [searchText, setSearchText] = useState("");

  const patient: Patient = {
    name: "João da Silva",
    sideEffects: [
      "Dor de cabeça",
      "Náusea",
      "Tontura",
      "Insônia",
      "Irritabilidade",
      "Fadiga",
      "Dor muscular",
      "Perda de apetite",
    ],
    medicines: [
      {
        name: "Medicamento A",
        description:
          "Usado para tratar hipertensão arterial e insuficiência cardíaca.",
        sideEffects: ["Tosse seca", "Tontura", "Fadiga"],
      },
      {
        name: "Medicamento B",
        description: "Usado para tratar dor e inflamação.",
        sideEffects: ["Dor de estômago", "Náusea", "Constipação"],
      },
    ],
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.sectionTitle}>Detalhes do Paciente</Text>
      <Text style={styles.patientName}>{patient.name}</Text>
      <View style={styles.sideEffectsContainer}>
        <Text style={styles.sideEffectsTitle}>
          Efeitos Colaterais Registrados
        </Text>
        <SideEffectsList sideEffects={patient.sideEffects} />
      </View>
      <View style={styles.searchBarContainer}>
        <TextInput
          style={styles.searchBar}
          placeholder="Pesquisar..."
          value={searchText}
          onChangeText={setSearchText}
        />
      </View>

      <View style={styles.medicinesContainer}>
        <Text style={styles.sectionTitle}>Medicamentos</Text>
        {patient.medicines.map((medicine, index) => (
          <MedicineItem key={index} medicine={medicine} />
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  userName: {
    fontSize: 18,
    marginBottom: 15,
    textAlign: "center",
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
  },
  patientName: {
    fontSize: 15,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  sideEffectsContainer: {
    backgroundColor: "#f0f0f0",
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
  },
  sideEffectsTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
  },
  searchBarContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  searchBar: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
  },
  searchIcon: {
    width: 20,
    height: 20,
    marginLeft: 10,
  },
  medicinesContainer: {
    marginBottom: 20,
  },
});

export default PatientDetailsScreen;
