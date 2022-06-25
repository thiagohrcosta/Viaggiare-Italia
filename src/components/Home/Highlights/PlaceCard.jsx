import { Box, GridItem, Text } from "@chakra-ui/react";
import { Star } from "phosphor-react";

export function PlaceCard(props) {

  function handleStarRating(){
    let stars = []
    for (let i = 0; i < props.rating; i++) {
      if (props.rating > stars[-1]) {
        stars.push(<Star color={'#E6F14A'} weight="fill" size={18} />)
      } else {
        stars.push(<Star color={'#E6F14A'} size={18} />)
      }
    }
    return stars
  }

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
        <Box
          backgroundImage={"linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 100, 0.5) )"}
          height={[550,350]}
          width={'100%'}
          display={'flex'}
          justifyContent={'center'}
          alignItems={'center'}
          flexDirection={'column'}
          textAlign={'center'}
          padding={['30px', '12px']}
        >
          <Box
            cursor={'pointer'}
          >
            <Text
              fontSize={24}
              color={'whiteAlpha.900'}
              borderBottom={'5px solid #D72638'}
            >
              {props.name}
            </Text>
            <Text
              color={'whiteAlpha.900'}
            >
              {props.description}
            </Text>
          </Box>
          <Box
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
            marginTop={['125%','100%']}
          >
              {handleStarRating()}
            </Box>
        </Box>
      </Box>
    </GridItem>
  )
}
