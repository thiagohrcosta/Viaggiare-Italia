import { Box, Link, Text } from "@chakra-ui/react";

export default function PlaceCard(props) {
  return (
    <Box
      backgroundImage={props.photo}
      backgroundRepeat={"no-repeat"}
      backgroundSize={"cover"}
      height="380px"
      width={'100%'}
     >
      <Box
        backgroundImage={"linear-gradient( rgba(0, 0, 0, 0.4), rgba(0, 0, 100, 0.5) )"}
        height="380px"
        width={'100%'}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        flexDirection={"column"}
        _hover={{
          cursor: 'pointer',
          transition: 'all 0.3s ease-in-out',
          backgroundColor: 'blue.900',
        }}
      >
        <Text
          fontSize={24}
          fontWeight={'700'}
          color={'whiteAlpha.900'}
          textAlign={"center"}
        >
          <Link href={`/places/${props.id}`}>
            {props.name}
          </Link>
        </Text>
        <Box
          display={"flex"}
          lineHeight={"0"}
        >
          <Text fontSize={92} color={'green.500'}>-</Text>
          <Text fontSize={92} color={'whiteAlpha.900'}>-</Text>
          <Text fontSize={92} color={'red.500'}>-</Text>
        </Box>

      </Box>
    </Box>
  )
}
