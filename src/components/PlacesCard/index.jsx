import { Box, Grid, GridItem, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import api from "../../services/api";
import PlaceCard from "../PlaceCard";

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
    <Box>
      <Grid>
        <GridItem>
          {placesByCity && placesByCity.map((place) => {
            if (place.destination_id == router.query.id) {
              return (
                <PlaceCard
                  key={place.id}
                  id={place.id}
                  name={place.name}
                />
              )
            }})
          }
        </GridItem>
      </Grid>
    </Box>

  )
}
