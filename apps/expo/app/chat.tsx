import { ChatToEnguageScreen } from '@enguage/core/features/chat/chat.screen'
import { Stack } from 'expo-router'

export default function Screen() {
  return (
    <>
      <Stack.Screen
        options={{
          title: 'Try out Enguage',
        }}
      />
      <ChatToEnguageScreen />
    </>
  )
}
