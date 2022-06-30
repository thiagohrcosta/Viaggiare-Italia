import { useEffect, useState } from "react";

import api from "../../src/services/api";
import { useRouter } from 'next/router'
import { Box, Text } from "@chakra-ui/react";
import { Navbar } from "../../src/components/Navbar";
import { PlacesCard } from "../../src/components/PlacesCard";

export default function Destination(props) {

  const router = useRouter();
  const [destination, setDestination] = useState();

  const fetchDestination = async () => {
    const response = await api.get(`http://localhost:3000/api/v1/destinations/${router.query.id}`);
    console.log(response.data);
    setDestination(response.data);
  }

  useEffect(() => {
    fetchDestination()
  }, [])

  return (
    <>
      <main>
        <title>{destination?.name} | Viaggiare Italia</title>
      </main>
      <Navbar />
      <Box
        backgroundImage={destination?.banner}
        height={"80vh"}
        backgroundSize={"cover"}
        backgroundRepeat={"no-repeat"}
      >
        <Box
          backgroundColor={"rgba(0,0,0,0.2)"}
          textAlign={"center"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          flexDirection={"column"}
          height={"100%"}
          lineHeight={"0.5"}
        >
          <Text
            fontSize={['48px', '72px']}
            fontWeight={'700'}
            color={'whiteAlpha.900'}
          >
            {destination?.name}
          </Text>
          <Box
            display={"flex"}
          >
            <Text fontSize={92} color={'green.500'}>-</Text>
            <Text fontSize={92} color={'whiteAlpha.900'}>-</Text>
            <Text fontSize={92} color={'red.500'}>-</Text>
          </Box>
        </Box>
      </Box>
      <Box
        background={'#fff'}
        opacity={1}
        padding={['30px', '12px']}
        margin={'0 auto'}
        maxWidth={1028}
        borderRadius={8}
        marginTop={-8}
        >
        <Box>
          <Text
            color={'blue.900'}
            fontWeight={'700'}
            fontSize={24}
            marginTop={8}
            marginBottom={8}
            textAlign={"center"}
            textTransform={"uppercase"}
          >
            I migliori posti in città
          </Text>

          <PlacesCard />
        </Box>
      </Box>
    </>
  )
}
