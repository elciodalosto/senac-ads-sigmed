export interface SideEffect {
  id: number
  patientId: number
  medicationId: number
  description: string
  reportedAt: string
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
