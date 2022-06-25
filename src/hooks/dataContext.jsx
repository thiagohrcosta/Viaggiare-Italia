// adds fetch data with context

import { createContext, useEffect } from "react";

const DataContext = createContext()

export function DataContextProvider (props) {
  const [destinations, setDestinations] = useState([])
  const [places, setPlaces] = useState([])
  const [categories, setCategories] = useState([])

  async function fetchDestinationData() {
    const response = await fetch('http://localhost:3000/destinations')
    const data = await response.json()
    setDestinations(data.response)
  }

  async function fetchPlaceData() {
    const response = await fetch('http://localhost:3000/places')
    const data = await response.json()
    setPlaces(data.response)
  }

  async function fetchCategories() {
    const response = await fetch('http://localhost:3000/categories')
    const data = await response.json()
    setCategories(data.response)
  }

  return (
    <DataContext.Provider value={{
      destinations,
      places,
      categories,
      fetchDestinationData
      }}>
      {props.children}
    </DataContext.Provider>
  )
}
