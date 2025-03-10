import React, { useEffect, useState } from "react"
import {
  View,
  Text,
  Modal,
  TextInput,
  Button,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard
} from "react-native"
import { Controller, useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { SearchBar } from "./SearchBar"
import { Medication } from "@/types/medication"

interface ModalSideEffectProps {
  visible: boolean
  isForCreate?: boolean
  onClose: () => void
  onSave: (data: {
    patientId: number
    medicationId: number
    description: string
  }) => void
  onEdit?: (data: { sideEffectId: number; description: string }) => void
  medications: Medication[]
  data: {
    patientId: number
  }
}

const sideEffectSchema = z.object({
  patientId: z.number(),
  medicationId: z.number().min(1, "Selecione um medicamento"),
  description: z.string().min(5, "A descrição deve ter pelo menos 5 caracteres")
})

type SideEffectForm = z.infer<typeof sideEffectSchema>

const ModalSideEffect: React.FC<ModalSideEffectProps> = ({
  visible,
  onClose,
  onSave,
  onEdit,
  isForCreate = true,
  data,
  medications
}) => {
  const {
    control,
    handleSubmit,
    reset,
    watch,
    formState: { errors }
  } = useForm<SideEffectForm>({
    resolver: zodResolver(sideEffectSchema),
    defaultValues: {
      patientId: data.patientId,
      medicationId: 0,
      description: ""
    }
  })

  const [searchText, setSearchText] = useState("")
  const [filteredMedications, setFilteredMedications] =
    useState<Medication[]>(medications)

  useEffect(() => {
    if (searchText.trim() === "") {
      setFilteredMedications(medications)
    } else {
      const filtered = medications.filter(med =>
        med.name.toLowerCase().includes(searchText.toLowerCase())
      )
      setFilteredMedications(filtered)
    }
  }, [searchText, medications])

  const handleSave = (data: SideEffectForm) => {
    try {
      onSave({
        patientId: data.patientId,
        medicationId: data.medicationId,
        description: data.description
      })
      cleanForm()
    } catch (error) {
      console.log(error)
    }
  }

  const cleanForm = () => {
    reset()
  }

  return (
    <Modal visible={visible} transparent animationType="slide">
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.overlay}>
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.container}
          >
            <View style={styles.innerContainer}>
              <Text style={styles.title}>
                {isForCreate
                  ? "Adicionar Efeito Colateral"
                  : "Editar efeito colateral"}
              </Text>
              <ScrollView style={{ maxHeight: 300 }}>
                <SearchBar value={searchText} onChangeText={setSearchText} />
                <Text style={styles.label}>Medicamentos</Text>
                <Controller
                  control={control}
                  name="medicationId"
                  render={({ field: { onChange, value } }) => (
                    <ScrollView horizontal style={styles.selectContainer}>
                      {filteredMedications.map(med => (
                        <TouchableOpacity
                          key={med.id}
                          style={[
                            styles.option,
                            value === med.id && styles.optionSelected
                          ]}
                          onPress={() => onChange(med.id)}
                        >
                          <Text style={styles.optionText}>{med.name}</Text>
                        </TouchableOpacity>
                      ))}
                    </ScrollView>
                  )}
                />
                {errors.medicationId && (
                  <Text style={styles.error}>
                    {errors.medicationId.message}
                  </Text>
                )}

                <Text style={styles.label}>Descrição</Text>
                <Controller
                  control={control}
                  name="description"
                  render={({ field: { onChange, value } }) => (
                    <TextInput
                      style={[
                        styles.input,
                        errors.description && styles.inputError
                      ]}
                      placeholder="Descreva o efeito colateral"
                      value={value}
                      onChangeText={onChange}
                      multiline
                    />
                  )}
                />
                {errors.description && (
                  <Text style={styles.error}>{errors.description.message}</Text>
                )}
              </ScrollView>

              <View style={styles.buttonContainer}>
                <Button title="Cancelar" onPress={onClose} color="#888" />
                <Button
                  title="Salvar"
                  onPress={handleSubmit(handleSave)}
                  color="#4CAF50"
                />
              </View>
            </View>
          </KeyboardAvoidingView>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  )
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)"
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  innerContainer: {
    width: "90%",
    padding: 20,
    backgroundColor: "#fff",
    borderRadius: 10,
    elevation: 5
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10
  },
  label: {
    marginTop: 10,
    marginBottom: 5,
    fontWeight: "bold"
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 8,
    marginBottom: 10
  },
  inputError: {
    borderColor: "#f00"
  },
  error: {
    color: "#f00",
    fontSize: 12,
    marginBottom: 5
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10
  },
  selectContainer: {
    flexDirection: "row"
  },
  option: {
    padding: 8,
    marginRight: 5,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5
  },
  optionSelected: {
    borderColor: "#4CAF50",
    backgroundColor: "#E8F5E9"
  },
  optionText: {
    color: "#333"
  }
})

export default ModalSideEffect
