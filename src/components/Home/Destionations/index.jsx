import { Box, Button, Grid, GridItem, Input, InputGroup, InputLeftElement, Stack, Text } from '@chakra-ui/react'
import { MagnifyingGlass } from 'phosphor-react'
import { useEffect, useState } from 'react'
import { TravelCard } from '../TravelCard'

export function Destinations() {
  const [destinations, setDestinations] = useState([])

  const fetchData = async () => {
    const response = await fetch('http://localhost:3000/destinations')
    const data = await response.json()
    setDestinations(data)
  }

  useEffect(() => {
    fetchData()
  }, [])


  return(
    <Box>
      <Box
        maxWidth={[720,1028]}
        padding={6}
        backgroundColor={'whiteAlpha.900'}
        marginTop={-8}
        marginBottom={8}
        borderRadius={4}
        boxShadow={'0px 0px 10px rgba(0,0,0,0.1)'}
        marginX={'auto'}
      >
        <Text
          color={'blue.900'}
          fontWeight={'700'}
          fontSize={24}
          marginBottom={4}
        >Trova il meglio dell'Italia</Text>
        <Stack spacing={4}>
          <InputGroup>
            <InputLeftElement
              pointerEvents='none'
              children={<Text><MagnifyingGlass color={'#0F1C4A'} size={24}/></Text>}
            />
            <Input
              color={'blue.900'}
              type='tel' placeholder='Cercare qualcosa...'
            />
            <Button
              marginLeft={4}
              color={'whiteAlpha.900'}
              backgroundColor={'blue.900'}
              border={'2px solid #0F1C4A'}
              _hover={{
                backgroundColor: 'whiteAlpha.900',
                color: 'blue.900',
                transition: '0.3s',
                border: '2px solid #0F1C4A',
              }}
            >
              Ricerca
            </Button>
          </InputGroup>
        </Stack>
      </Box>
      <Grid
          backgroundColor={'whiteAlpha.900'}
          maxWidth={1028}
          templateColumns={['repeat(1, 1fr)', 'repeat(4, 1fr)']}
          gap={6}
          marginX={'auto'}
          padding={6}
      >
        {
          destinations.map((destination) => {
            return(
              <GridItem>
                <TravelCard
                  id={destination.id}
                  city={destination.name}
                  photo={destination.photo}
                />
              </GridItem>
            )
          })
        }
      </Grid>
    </Box>
  )
}
