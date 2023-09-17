import '@tamagui/core/reset.css'
import '@tamagui/font-inter/css/400.css'
import '@tamagui/font-inter/css/700.css'
import 'raf/polyfill'

import { NextThemeProvider, useRootTheme } from '@tamagui/next-theme'
import { CacheProvider } from '@enguage/caching'
import { UiProvider } from '@enguage/core/provider'
import Head from 'next/head'
import React from 'react'
import type { SolitoAppProps } from 'solito'
import { Separator, SizableText, Tabs } from '@enguage/atoms'
import { Home, MessageCircle } from '@tamagui/lucide-icons'
import { useRouter } from 'next/router'

if (process.env.NODE_ENV === 'production') {
  require('../public/tamagui.css')
}

function MyApp({ Component, pageProps }: SolitoAppProps) {
  return (
    <>
      <Head>
        <title>Enguage</title>
        <meta name="description" content="Enguage natural language understanding model" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useRootTheme()
  const { push } = useRouter()

  return (
    <NextThemeProvider
      onChangeTheme={(next) => {
        setTheme(next as any)
      }}
    >
      <CacheProvider>
        <UiProvider disableRootThemeClass defaultTheme={theme}>
          <Tabs
            f={1}
            defaultValue="tab1"
            flexDirection="row"
            orientation="vertical"
            borderRadius="$4"
            borderWidth="$0.25"
            overflow="hidden"
            borderColor="$borderColor"
          >
            <Tabs.List
              width={'$15'}
              disablePassBorderRadius="end"
              aria-label="Tabs navigation: home, chat"
              separator={<Separator />}
            >
              <Tabs.Tab value="tab1" onPress={() => push('/')}>
                <Home size={'$1'} />
                <SizableText paddingLeft={'$2'}>Enguage</SizableText>
              </Tabs.Tab>
              <Tabs.Tab value="tab1" onPress={() => push('/chat')}>
                <MessageCircle size={'$1'} />
                <SizableText paddingLeft={'$2'}>Chat</SizableText>
              </Tabs.Tab>
            </Tabs.List>
            <Separator vertical />
            <Tabs.Content
              backgroundColor="$background"
              key="tab1"
              value="tab1"
              padding="$2"
              alignItems="center"
              justifyContent="center"
              flex={1}
              borderColor="$background"
              borderRadius="$2"
              borderTopLeftRadius={0}
              borderTopRightRadius={0}
              borderWidth="$2"
            >
              {children}
            </Tabs.Content>
          </Tabs>
        </UiProvider>
      </CacheProvider>
    </NextThemeProvider>
  )
}

export default MyApp
