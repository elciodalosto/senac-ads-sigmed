export interface Inventory {
  id: number
  medicationId: number
  quantity: number
  lastUpdated: string
  medication: Medication
}

export interface Medication {
  id: number
  name: string
  description: string
  dosageForm: string
  concentration: string
  createdAt: string
}
