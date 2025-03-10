import { api_sigmed } from "../axios"

interface NewSideEffect {
  patientId: number
  medicationId: number
  description: string
}

export const createSideEffect = async (data: NewSideEffect) => {
  try {
    const response = await api_sigmed.post("/sideeffect/create", data, {
      headers: {
        "Content-Type": "application/json"
      }
    })

    return response.data
  } catch (error: any) {
    if (error.response) {
      console.log("Response", error.response.data)
    } else if (error.request) {
      console.log("Request", error.request)
    } else {
      console.log("Error", error.message)
    }
  }
}
