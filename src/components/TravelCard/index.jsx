import { Box, Text } from '@chakra-ui/react'
export function TravelCard(props) {
  return (
    <Box
      backgroundImage={"https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=383&q=80"}
      height={520}
      width={'100%'}
      backgroundSize={'contain'}
      backgroundRepeat={'no-repeat'}
      borderRadius={4}
    >
      <Box
        padding={2}
        backgroundImage={"linear-gradient( rgba(0, 0, 0, 0.2), rgba(0, 0, 100, 0.5) )"}
        >
        <Box
          backgroundColor={'#fff'}
          color={'blue.900'}
          width={'100px'}
          boxShadow={'0px 0px 10px rgba(0,0,0,0.1)'}
          textAlign={'center'}
        >
          <Text
            fontWeight={'700'}
          >
            {props.city}
          </Text>
        </Box>
        <Box
          marginTop={'100%'}
        >
          <Text
            fontWeight={'300'}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Text>
          <Text
            marginTop={2}
            border={'2px solid #fff'}
            borderRadius={12}
            padding={1}
            width={'100px'}
            fontWeight={'700'}
            textAlign={'center'}
            _hover={{
              backgroundColor: 'blue.900',
              transition: 'all 0.3s ease-in-out',
            }}
          >
            More
          </Text>
        </Box>
      </Box>
    </Box>
  )
}
