import { Box } from "@chakra-ui/react";

export function CityCard(props) {
  return (
    <Box
      backgroundImage={props.photo}
      height={[550, 350]}
    >
      <Text>{props.name}</Text>

    </Box>
  )
}
