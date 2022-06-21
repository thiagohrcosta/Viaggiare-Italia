import { Box, Grid, GridItem, Link, Text } from "@chakra-ui/react";
import { AirplaneInFlight, Copyright, GithubLogo } from "phosphor-react";

export function Footer() {
  return (
    <Box
      backgroundColor={'gray.900'}
      padding={8}
      display={'flex'}
      alignItems={'center'}
      justifyContent={'space-between'}
    >
      <Grid maxW={'100%'} marginX={'auto'} templateColumns={['repeat(1, 1fr)','repeat(3, 1fr)']} gap={4}>
        <GridItem>
          <AirplaneInFlight size={32} />
        </GridItem>
        <GridItem></GridItem>
        <GridItem>
          <Text display={'flex'} alignItems={'center'}>
            Sviluppato da Thiago H.R. Costa. Controlla il mio
            <Link marginLeft={2} href="https://github.com/thiagohrcosta" isExternal>
            <GithubLogo
              size={32}
            />
          </Link>
          </Text>
        </GridItem>
      </Grid>

    </Box>
  )
}
