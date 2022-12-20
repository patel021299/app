import { useContext } from "react"
import { StoreContext } from "../context/StoreContext"

export const useStoreContext = () => {
  const context = useContext(StoreContext)

  if(!context) {
    throw Error('useStoreContext must be used inside an CanvasContextProvider')
  }

  return context
}