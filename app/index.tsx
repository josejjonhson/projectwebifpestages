import { Link } from "expo-router";
import { View } from "react-native";

export default function Index() {
  return (
    <View>
      <Link href="/screens/login/login_view" style={{ padding: 10, borderWidth: 1 }}>Ir para a tela ENTRAR/LOGIN</Link>
      <Link href="/screens/perfil/perfil_usuario_view" style={{ padding: 10, borderWidth: 1 }}>Ir para a tela PERFIL</Link>
      <Link href="/screens/empresas/empresas_view" style={{ padding: 10, borderWidth: 1 }}>Ir para a tela EMPRESAS</Link>
      <Link href="/screens/estagios/estagios_view" style={{ padding: 10, borderWidth: 1 }}>Ir para a tela ESTÁGIOS</Link>
      {/* <Link href="/screens/registro_usuarios/registro" style={{ padding: 10, borderWidth: 1 }}>Ir para a tela REGISTRO</Link> */}
    </View>
  );
}
