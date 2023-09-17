import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native'
import { UiProvider } from '@enguage/core/provider'
import { useFonts } from 'expo-font'
import { Tabs } from 'expo-router'
import { useColorScheme } from 'react-native'
import { CacheProvider } from '@enguage/caching'
import { Home, MessageCircle } from '@tamagui/lucide-icons'

export default function HomeLayout() {
  const [loaded] = useFonts({
    Inter: require('@tamagui/font-inter/otf/Inter-Medium.otf'),
    InterBold: require('@tamagui/font-inter/otf/Inter-Bold.otf'),
  })
  const scheme = useColorScheme()

  if (!loaded) {
    return null
  }
  return (
    <CacheProvider>
      <UiProvider>
        <ThemeProvider value={scheme === 'dark' ? DarkTheme : DefaultTheme}>
          <Tabs>
            <Tabs.Screen
              name="index"
              options={{
                href: '',
                tabBarIcon: () => <Home />,
              }}
            />
            <Tabs.Screen
              name="chat"
              options={{
                href: 'chat',
                tabBarLabel: 'Chat',
                tabBarIcon: () => <MessageCircle />,
              }}
            />
          </Tabs>
        </ThemeProvider>
      </UiProvider>
    </CacheProvider>
  )
}
