import '../global.css';
import { Stack } from 'expo-router';
import { Provider } from '../hooks/useAuth';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export const unstable_settings = {
  initialRouteName: '(auth)/loading',
};

export default function RootLayout() {
  return (
    <Provider>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <Stack>
          <Stack.Screen name="(auth)/loading" options={{ headerShown: false }} />
          <Stack.Screen name="(auth)/index" options={{ headerShown: false }} />
          <Stack.Screen name="(drawer)" options={{ headerShown: false }} />
        </Stack>
      </GestureHandlerRootView>
    </Provider>
  );
}