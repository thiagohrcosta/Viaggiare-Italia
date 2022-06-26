import { Box, Grid, GridItem, Text } from "@chakra-ui/react";
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
    <Box>
      <Grid
        backgroundColor={'whiteAlpha.900'}
        templateColumns={['repeat(1, 1fr)', 'repeat(4, 1fr)']}
        gap={6}
        marginX={'auto'}
        padding={6}>
        <GridItem>
          {placesByCity && placesByCity.map((place) => {
            if (place.destination_id == router.query.id) {
              return (
                <><Text color={"red"}>{place.name}</Text></>
              )
            }})
          }
        </GridItem>
      </Grid>
    </Box>

  )
}
