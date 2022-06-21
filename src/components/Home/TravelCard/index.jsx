import { Box, Text } from '@chakra-ui/react'
export function TravelCard(props) {
  return (
    <Box
      backgroundImage={props.photo}
      height={[550,350]}
      width={'100%'}
      backgroundSize={['auto','cover']}
      backgroundRepeat={'no-repeat'}
      borderRadius={4}
    >
      <Box
        padding={['30px', '12px']}
        backgroundImage={"linear-gradient( rgba(0, 0, 0, 0.2), rgba(0, 0, 100, 0.5) )"}
        height={[550,350]}
        >
        <Box
          backgroundColor={'#fff'}
          color={'blue.900'}
          width={['100%','100px']}
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
          marginTop={['125%','100%']}
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
            width={['100%','100px']}
            fontWeight={'700'}
            textAlign={'center'}
            _hover={{
              backgroundColor: 'blue.900',
              transition: 'all 0.3s ease-in-out',
            }}
          >
            Vedi di più
          </Text>
        </Box>
      </Box>
    </Box>
  )
}
