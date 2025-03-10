import { api_sigmed } from "../axios"

export const deleteSideEffect = async (sideEffectId: number) => {
  try {
    const response = await api_sigmed.delete(
      `/sideeffect/delete/${sideEffectId}`
    )
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
