// adds fetch data with context

import { createContext, useEffect, useState } from "react";
import api from "../services/api";

export const DestinationContext = createContext()

export function DestinationContextProvider (props) {
  const [destinations, setDestinations] = useState()
  // const [places, setPlaces] = useState([])
  // const [categories, setCategories] = useState([])

  const fetchDestination = async () => {
    const response = await api.get(`/destinations`)
    console.log(response)
    setDestinations(response.data)
  // }

  useEffect(() => {
    fetchDestination()
  }, [destinations])

  // async function fetchPlaceData() {
  //   const response = await fetch('http://localhost:3000/places')
  //   const data = await response.json()
  //   setPlaces(data.response)
  // }

  // async function fetchCategories() {
  //   const response = await fetch('http://localhost:3000/categories')
  //   const data = await response.json()
  //   setCategories(data.response)

  }

  return (
    <DestinationContext.Provider value={{
      destinations,
      fetchDestination
      }}>
      {props.children}
    </DestinationContext.Provider>
  )
}
