import { api_sigmed } from "@/api/axios"
import { Link, useRouter } from "expo-router"
import { useEffect, useState } from "react"
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native"
import { Search, Layers, ArrowLeft } from "lucide-react-native"

interface InventoryItem {
  id: number
  quantity: number
  medication: {
    id: number
    name: string
    description: string
    dosageForm: string
    concentration: string
    createdAt: string
  }
}

export default function MediceStock() {
  const [inventoryItems, setinventoryItems] = useState([])
  const [loading, setLoading] = useState(true)
  const router = useRouter()
  const [searchText, setSearchText] = useState("")

  const fetchInventoryItems = async () => {
    setLoading(true)
    try {
      const response = await api_sigmed.get("/inventory/getall")

      setinventoryItems(response.data)
    } catch (error) {
      console.log("Erro:", error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchInventoryItems()
  }, [])

  const filteredItems = inventoryItems.filter((item: InventoryItem) =>
    item?.medication?.name.toLowerCase().includes(searchText.toLowerCase())
  )

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Estoque de medicamentos</Text>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Pesquise o medicamento"
          value={searchText}
          onChangeText={setSearchText}
        />
        <Search size={20} />
      </View>
      {loading ? (
        <Text>Carregando...</Text>
      ) : (
        <FlatList
          data={filteredItems}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }: { item: InventoryItem }) => (
            <View style={styles.card}>
              <Layers size={24} />
              <Text style={styles.medicineName}>{item?.medication?.name}</Text>
              <Text style={styles.quantity}>Qnt. {item?.quantity || 0}</Text>
            </View>
          )}
        />
      )}

      <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
        <ArrowLeft size={20} color="white" />
        <Text style={styles.backButtonText}>Voltar</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#fff" },
  username: { fontSize: 18, color: "#333", marginBottom: 10 },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
    borderRadius: 10,
    padding: 5,
    marginBottom: 20
  },
  searchInput: { flex: 1, padding: 5 },
  searchIcon: { marginRight: 5 },
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderWidth: 2,
    borderColor: "#e0e0e0",
    borderRadius: 10,
    padding: 15,
    marginBottom: 10
  },
  icon: { marginRight: 10 },
  medicineName: { fontSize: 16, flex: 1, paddingLeft: 10 },
  quantity: { fontSize: 14, color: "#888" },
  backButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#333",
    borderRadius: 10,
    padding: 10,
    marginTop: 20
  },
  backButtonText: { color: "#fff", marginLeft: 5 }
})
