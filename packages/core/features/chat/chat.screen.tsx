import { Button, Form, H1, H6, Paragraph, XStack, YStack } from '@enguage/atoms/src'
import { TextInput } from '@enguage/atoms/src/components/TextInput/TextInput'
import { Github, Send } from '@tamagui/lucide-icons'
import { useChatScreen } from './chat.hook'
import { MessageList } from '@enguage/atoms/src/components/MessageList/MessageList'
import { Link } from 'solito/link'

export function ChatToEnguageScreen() {
  const { inputText, setInputText, messages, onSend, isLoading } = useChatScreen()

  return (
    <YStack f={1} jc="space-between" als="stretch" space>
      {messages.length === 0 && <IntroText />}
      <MessageList messages={messages} />
      <Form onSubmit={onSend}>
        <XStack>
          <TextInput value={inputText} onChangeText={setInputText} disabled={isLoading} autofocus />
          <Form.Trigger asChild>
            <Button
              disabled={inputText == ''}
              borderWidth={2}
              borderColor={'$gray7'}
              marginHorizontal={2}
              paddingVertical={10}
            >
              <Send size={'$1'} />
            </Button>
          </Form.Trigger>
        </XStack>
      </Form>
    </YStack>
  )
}

const IntroText = () => (
  <YStack f={1} ai="center" jc={'center'} paddingVertical={100} als={'stretch'} space>
    <YStack space="$4" maw={700}>
      <H1 ta="center" p={40}>
        Welcome to Enguage!
      </H1>

      <Paragraph size={'$6'} ta="center">
        This is a Universal App to show the functionality of the Enguage Natural Language
        Understanding library.
      </Paragraph>

      <Link href="https://bitbucket.org/martinwheatman/enguage/src/develop/" target="_blank">
        <H6 p={20} ta="center">
          Find us on GitHub or Bitbucket <Github size={'$1'} />
        </H6>
      </Link>
    </YStack>
  </YStack>
)
