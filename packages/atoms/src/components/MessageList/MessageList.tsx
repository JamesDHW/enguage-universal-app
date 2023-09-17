import { Text, ScrollView, YStack } from '@enguage/atoms/src'
import { FC } from 'react'
import { Message } from '@enguage/core/features/chat/chat.hook'

interface MessageListProps {
  messages: Message[]
}

export const MessageList: FC<MessageListProps> = ({ messages }) => {
  const BORDER_WIDTH = 20
  return (
    <ScrollView flex={1} marginHorizontal={10} maxHeight={800}>
      <YStack space>
        {messages.map(({ isReply, content, timestamp }) => (
          <Text
            key={timestamp}
            backgroundColor={isReply ? '#0ea5e9' : '#22c55e'}
            borderRadius={BORDER_WIDTH}
            padding={15}
            alignSelf={isReply ? 'flex-start' : 'flex-end'}
            borderBottomLeftRadius={isReply ? 0 : BORDER_WIDTH}
            borderBottomRightRadius={isReply ? BORDER_WIDTH : 0}
          >
            {content}
          </Text>
        ))}
      </YStack>
    </ScrollView>
  )
}
