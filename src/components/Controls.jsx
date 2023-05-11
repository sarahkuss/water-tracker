import { Box, AddIcon, Text, Button } from 'native-base'

export default function Controls ({intake, setIntake}) {
  return(
    <Box w="100%" alignItems="center" justifyContent="center">
      <Text color="whitesmoke" fontSize="xl" mb={4}>
        <AddIcon color="whitesmoke" />{' '}
        Add a portion of water
      </Text>
      <Box flexDir="row" mb={4} w="80%" justifyContent="space-around">
        <Button colorScheme="blue" size="lg" borderRadius={16} pl={5} pr={5} mr={5} onPress={() => setIntake(intake + 8)}>
          <Text color="whitesmoke" fontSize="lg" fontWeight="500">💧 One Cup</Text>
        </Button>
        <Button colorScheme="blue" size="lg" borderRadius={16} pl={5} pr={5} onPress={() => setIntake(intake + 32)}>
        <Text color="whitesmoke" fontSize="lg" fontWeight="500">💦 One Bottle</Text></Button>
      </Box>
      <Button colorScheme="gray" pl={8} pr={8} borderRadius={16} onPress={() => setIntake(0)}>
        <Text color="whitesmoke" fontSize="lg" fontWeight="500">Reset</Text>
      </Button>
    </Box>
  )
}