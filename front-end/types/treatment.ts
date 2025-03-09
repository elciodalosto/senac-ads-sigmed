export interface Treatment {
  id: number
  patientId: number
  doctorId: number
  description: string
  startDate: string
  endDate: any
  createdAt: string
  prescriptions: Prescription[]
}

export interface Prescription {
  id: number
  patientId: number
  doctorId: number
  prescribedAt: string
  items: Item[]
}

export interface Item {
  id: number
  prescriptionId: number
  medicationId: number
  dosage: string
  frequency: string
  duration: string
}
