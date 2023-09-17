import { H1, Paragraph, ScrollView, YStack } from '@enguage/atoms/src'

export function HomeScreen() {
  return (
    <YStack f={1} ai="center" als={'stretch'} space>
      <YStack space="$4" maw={700}>
        <ScrollView space>
          <H1 ta="center" paddingVertical={40}>
            Enguage - Unifying Speech and Computation
          </H1>
          <Paragraph size={'$4'}>
            Enguage is a Turing Complete speech interpreter; you can do things with words.
          </Paragraph>
          <Paragraph size={'$4'}>
            Speech is not just functional, it can be deterministic. This is the approach taken by
            the Ordinary Language Philosophers of the mid-to-late-20th Century.
          </Paragraph>
          <Paragraph size={'$4'}>
            The basic principle is that algorithms are described using plain English, i.e. the
            spoken or written word. Utterances are used to elevate speech as thoughts, such as, "to
            the phrase hello reply hello to you too" which creates a function.
          </Paragraph>
          <Paragraph size={'$4'}>
            Thoughts, in turn, reference a reply, such as, "the factorial of one is one". Using very
            simple pattern matching techniques, thoughts can be expanded to create a full
            repertoire, such as "the factorial of n is n times the factorial of n minus one". In
            this way, a system of speech can simulate a Turing machine and so is the Turing
            Equivalent of a Turing Machine.
          </Paragraph>
          <Paragraph size={'$4'}>
            This is different to the imperative model used by smart speaker devices ('play this',
            'buy that') where actions are provided by written program, in particular JavaScript,
            typically on a web server. Source code can't create (and upload and publish) source
            code.
          </Paragraph>
          <Paragraph size={'$4'}>
            This is also different to the probabilistic generative text AI where the 'algorithm' is
            opaque.
          </Paragraph>
          <Paragraph size={'$4'}>
            Using thoughts means that the instruction of a machine is generated by voice at the
            point of use. You directly interact with your machine: there’s no pesky JavaScript nor
            corporate websites (nor killer robots!) to get in the way!
          </Paragraph>
        </ScrollView>
      </YStack>
    </YStack>
  )
}
