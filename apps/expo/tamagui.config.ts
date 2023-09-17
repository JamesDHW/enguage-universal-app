// don't import from here, that's handled already
// instead this is just setting types for this folder

import { config } from '@enguage/atoms'

type Conf = typeof config

declare module 'tamagui' {
  interface TamaguiCustomConfig extends Conf {}
}

export default config
