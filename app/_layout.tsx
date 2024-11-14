import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: '#121212',
        },
        headerTintColor: '#fff',
      }}
    >
      <Stack.Screen name="screens/login/login_view" options={{ title: 'Entrar' }} />
      <Stack.Screen name="screens/perfil/perfil_usuario_view" options={{ title: 'Perfil' }} />
      <Stack.Screen name="screens/estagios/estagios_view" options={{ title: 'Estágios' }} />
      <Stack.Screen name="screens/empresas/empresas_view" options={{ title: 'Empresas' }} />
      {/* <Stack.Screen name="screens/registro_usuarios/registro" options={{ title: 'Registro' }} /> */}
    </Stack>
  );
}
