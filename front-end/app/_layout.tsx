import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import { router, Stack } from 'expo-router';
import * as SplashScreen from 'expo-splash-screen';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import 'react-native-reanimated';
import { useColorScheme } from '@/hooks/useColorScheme';
import { AuthProvider } from '@/context/authContext';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';
import { Pressable } from 'react-native';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <GestureHandlerRootView style={{flex: 1}}> 
      <AuthProvider>
        <ThemeProvider value={DefaultTheme}>
          <Stack>
            <Stack.Screen name="index" options={{ headerShown: false }} />
            <Stack.Screen name="pages/login" options={{ title: "Login", headerShown: false }} />
            <Stack.Screen name="pages/menu" options={{
              title: "Menu Principal", headerRight: () => (<Ionicons.Button backgroundColor={"#FFF"} color={"#000"} name='notifications-outline' size={26} onPress={() => router.push("/pages/notifications")} />) }}
            />
            
            <Stack.Screen name="pages/notifications" options={{ title: "Notificações"  }} />
            <Stack.Screen name="pages/patientSearch" options={{ title: "Buscar Pacientes"  }} />
            <Stack.Screen name="pages/colateralEffects" options={{ title: "Efeitos Colaterais"  }} />
            <Stack.Screen name="pages/medicineStock" options={{ title: "Estoque"  }} />
            <Stack.Screen name="pages/settings" options={{ title: "Configurações"  }} />
            <Stack.Screen name="pages/passwordRecovery" options={{ headerShown: false  }} />
            <Stack.Screen name="+not-found" />
          </Stack>
          <StatusBar style="dark" />
        </ThemeProvider>
      </AuthProvider>
    </GestureHandlerRootView>
  );
}
