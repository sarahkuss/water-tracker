import { View } from "react-native"
import { Box, Text, Image, Progress } from "native-base"

export default function Tracker ({intake, goal, setIntake}) {
  return(
    <Box height={350} width="100%" alignItems="center" justifyContent="center">
      <View
        onTouchStart={e => this.touchY = e.nativeEvent.pageY} // 'this' is referring to View component. Recording where finger was when they started touching vertically
        onTouchEnd={e => {
          const swipeY = Math.round(this.touchY - e.nativeEvent.pageY)
          if(swipeY > 20) {
            setIntake(intake + 8)
          } else if (swipeY < -20) {
             setIntake(intake - 8)
          }
          
        }}
      >
        <Image
          size={200}
          borderRadius={100}
          borderColor="blue.300"
          borderWidth={8}
          mb={4}
          source={{
            uri:'https://wallpaperaccess.com/full/380161.jpg'
          }}
          alt="A splash of water"
        />
      </View>
      <Text color="whitesmoke" fontSize="2xl" fontWeight="900">{intake} oz</Text>
      <Box w="90%" maxW="400" mt={6}>
        <Progress size="2xl" colorScheme="blue" value={intake} max={goal} />
      </Box>
    </Box>
  )
}