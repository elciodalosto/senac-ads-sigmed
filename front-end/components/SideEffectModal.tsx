import React, { useState, useEffect } from "react"
import { Modal, View, Text, TextInput, Button, StyleSheet } from "react-native"

type SideEffectModalProps = {
  visible: boolean
  onClose: () => void
  onSave: (sideEffect: { description: string; medication: string }) => void
  initialData?: { description: string; medication: string } // Para edição
}

const SideEffectModal: React.FC<SideEffectModalProps> = ({
  visible,
  onClose,
  onSave,
  initialData
}) => {
  const [description, setDescription] = useState(initialData?.description || "")
  const [medication, setMedication] = useState(initialData?.medication || "")

  const handleSave = () => {
    if (description && medication) {
      onSave({ description, medication })
      onClose()
    } else {
      alert("Por favor, preencha todos os campos.")
    }
  }

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <View style={styles.modalContainer}>
          <Text style={styles.title}>
            {initialData
              ? "Editar Efeito Colateral"
              : "Adicionar Efeito Colateral"}
          </Text>

          <TextInput
            style={styles.input}
            placeholder="Descrição do efeito colateral"
            value={description}
            onChangeText={setDescription}
          />

          <TextInput
            style={styles.input}
            placeholder="Nome do medicamento"
            value={medication}
            onChangeText={setMedication}
          />

          <View style={styles.buttonsContainer}>
            <Button title="Cancelar" onPress={onClose} />
            <Button title="Salvar" onPress={handleSave} />
          </View>
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)"
  },
  modalContainer: {
    backgroundColor: "white",
    width: 300,
    padding: 20,
    borderRadius: 10,
    alignItems: "center"
  },
  title: {
    fontSize: 18,
    marginBottom: 16,
    fontWeight: "bold"
  },
  input: {
    width: "100%",
    height: 40,
    borderColor: "#ccc",
    borderWidth: 1,
    marginBottom: 12,
    paddingLeft: 8,
    borderRadius: 5
  },
  buttonsContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between"
  }
})

export default SideEffectModal
