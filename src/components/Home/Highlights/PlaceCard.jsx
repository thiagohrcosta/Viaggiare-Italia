import { Box, Grid, GridItem } from "@chakra-ui/react";

export function PlaceCard(props) {
  return (
      <GridItem>
        <Box
          backgroundImage={props.photo}
          height={[550,350]}
          width={'100%'}
          backgroundSize={['auto','cover']}
          backgroundRepeat={'no-repeat'}
          borderRadius={4}
        >
      </Box>
      </GridItem>


  )
}
