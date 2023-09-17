import { useMutation, post } from '@enguage/caching'
import { useRef, useState } from 'react'

export interface Message {
  isReply: boolean
  content: string
  timestamp: string
}

const addMessage = (content: string, isReply: boolean) => (currentMessages: Message[]) => {
  return [...currentMessages, { isReply, content, timestamp: new Date().toISOString() }]
}

export const useChatScreen = () => {
  const [messages, setMessages] = useState<Message[]>([])
  const [inputText, setInputText] = useState('')

  const { mutate, isLoading } = useMutation({
    mutationFn: (text: string) => post('/interpret', { utterance: text, sessionId: 'abc' }),
    onSuccess: ({ data }) => {
      setMessages(addMessage(data, true))
    },
  })

  const onSend = () => {
    setMessages(addMessage(inputText, false))
    // @ts-expect-error
    mutate(inputText)
    setInputText('')
  }

  return {
    inputText,
    setInputText,
    messages,
    onSend,
    isLoading,
  }
}
