import { Box, Text } from "@chakra-ui/react";

export function Banner(){
  return (
    <Box
      backgroundImage={"https://res.cloudinary.com/dloadb2bx/image/upload/v1655746920/italy1_sipwek.png"}
      height={"60vh"}
      width={"100%"}
      backgroundSize={"cover"}
    >
      <Box
        backgroundColor={"rgba(0,0,0,0.5)"}
        height={"60vh"}
        width={"100%"}
        textAlign={"center"}
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}

      >
        <Text
          fontSize={84}
        >
          ITALIA
        </Text>

        <Text
          fontSize={32}
        >
          Esplora un mondo chiamato Italia
        </Text>
      </Box>
    </Box>
  )
}
