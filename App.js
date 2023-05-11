import { useState, useEffect } from "react";
import { NativeBaseProvider, Box, Toast } from "native-base";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Title from "./src/components/Title";
import Goals from "./src/components/Goals";
import Tracker from "./src/components/Tracker";
import Controls from "./src/components/Controls";


export default function App() {
  const [intake, setIntake] = useState(0)
  const [goal, setGoal] = useState(128)

  const getPreviousIntake = async () => {
    const value = await AsyncStorage.getItem('@storage_Key')
    if(value) {
      setIntake(JSON.parse(value)) // asyncstorage can only store strings, so need to convert back to a number 
    }
  }

  const setPreviousIntake = async () => {
    if(intake) {
      await AsyncStorage.setItem('@storage_Key', JSON.stringify(intake)) // if you want to store an object, like day and water intake, you can JSON.stringify when you set and parse when you get
    }
  }

  useEffect(() => {
    getPreviousIntake()
  }, [])

  useEffect(() => {
    setPreviousIntake()
    if(intake >= goal) {
      Toast.show({
        title: "Hooray!",
        description: "You met your water intake goal!",
        bg: "blue.400",
        w: 340,
        h: 90,
        p: 16
      })
    }
  }, [intake])

  return (
    <NativeBaseProvider>
      <Box flex={1} bg="#151926" alignItems="center" justifyContent="flex-start">
        <Box height={25} width="100%" bg="#29313C"></Box>
        <Title />
        <Goals goal={goal} setGoal={setGoal} />
        <Tracker intake={intake} goal={goal} setIntake={setIntake} />
        <Controls intake={intake} setIntake={setIntake} />
      </Box>
    </NativeBaseProvider>
  );
}


// npx expo publish