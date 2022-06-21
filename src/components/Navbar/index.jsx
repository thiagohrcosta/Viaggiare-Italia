import { Box, Text } from "@chakra-ui/react";
import { AirplaneInFlight } from "phosphor-react";

export function Navbar() {
  return (
    <Box
      padding={8}

    >
      <Box
        display={'flex'}
        alignItems={'center'}
      >
        <AirplaneInFlight size={32} />
        <Text
          marginLeft={4}
        >
          VIAGGIARE ITALIA
        </Text>
      </Box>
    </Box>
  )
}
