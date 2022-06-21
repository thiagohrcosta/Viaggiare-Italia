import { Box, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";

export function HighLights() {
  const [places, setPlaces] = useState([])
  const [userChoice, setUserChoice] = useState("")

  const fetchData = async () => {
    const response = await fetch('http://localhost:3000/places')
    const data = await response.json()
    setPlaces(data)
  }

  function handleDisplayPlaces() {
    if (userChoice === "" || userChoice === "ristoranti") {
      return (
        <Box>
          {
            places.map((place) => {
              return (
                <Box>
                  <Text>{place.name}</Text>
                </Box>
              )
            })
          }
        </Box>
      )
    } else {
      return (
        <>galo</>
      )
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <Box
      backgroundColor={'whiteAlpha.900'}
      color={'blue.900'}

      maxWidth={1028}
      padding={6}
      marginTop={8}
      marginBottom={8}
      borderRadius={4}
      marginX={'auto'}
    >
      <Text
        fontSize={24}
        fontWeight={'700'}
      >
        Punti salienti
      </Text>
      <Box
        display={'flex'}
        flexDirection={'row'}
        flexWrap={'wrap'}
        justifyContent={'space-between'}
        marginTop={4}
        width={'40%'}
      >
        <Text
          borderBottom={userChoice === "ristoranti" ? '4px solid #0A0F2B' : ''}
          onClick={() => setUserChoice("ristoranti")}
          cursor={'pointer'}
        >
          Ristoranti
        </Text>
        <Text
          borderBottom={userChoice === "alberghi" ? '4px solid #0A0F2B' : ''}
          onClick={() => setUserChoice("alberghi")}
          cursor={'pointer'}
        >
          Alberghi
        </Text>
        <Text
          borderBottom={userChoice === "spiagge" ? '4px solid #0A0F2B' : ''}
          onClick={() => setUserChoice("spiagge")}
          cursor={'pointer'}
        >
          Spiagge
        </Text>
        <Text
          borderBottom={userChoice === "vita notturna" ? '4px solid #0A0F2B' : ''}
          onClick={() => setUserChoice("vita notturna")}
          cursor={'pointer'}
        >
          Vita notturna
        </Text>
      </Box>
      <Box>
        {handleDisplayPlaces()}
      </Box>
    </Box>
  )
}
