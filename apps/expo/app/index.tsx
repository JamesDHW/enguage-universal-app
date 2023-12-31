import { HomeScreen } from '@enguage/core/features/home/home.screen'
import { Stack } from 'expo-router'

export default function Screen() {
  return (
    <>
      <Stack.Screen
        options={{
          title: 'Enguage',
        }}
      />
      <HomeScreen />
    </>
  )
}
