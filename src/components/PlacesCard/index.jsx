import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import api from "../../services/api";

export function PlacesCard(props){

  const router = useRouter();
  const [placesByCity, setPlacesByCity] = useState();

  const fetchPlacesByCity = async () => {
    const response = await api.get(`http://localhost:3000/api/v1/places`);
    setPlacesByCity(response.data);
  }

  useEffect(() => {
    fetchPlacesByCity()
    console.log(placesByCity)
  }, [])

  return (
    <>
      {
        placesByCity && placesByCity.map((place) => {
          return (
            <>{place.name}</>
          )
        })
      }
    </>

  )
}
