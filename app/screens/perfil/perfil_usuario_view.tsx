import React, { useState } from 'react';
import { View, Text, Image, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { COLORS, FONT_SIZE } from '../../constants/theme';
import icons from '../../constants/icons';

export default function Profile() {
  const [name, setName] = useState('José Jonhson');
  const [email, setEmail] = useState('josejjonhson@gmail.com');

  return (
    <ScrollView style={{ flex: 1, backgroundColor: COLORS.light_gray, paddingHorizontal: 20, paddingTop: 30 }}>

      <View style={{ alignItems: 'center', marginBottom: 30 }}>
        <Text style={{ fontSize: FONT_SIZE.xl, color: COLORS.dark_gray }}>Perfil do Usuário</Text>
      </View>

      <View style={{ alignItems: 'center', marginBottom: 20 }}>
        <Image source={icons.logo_ifpe_estagios} style={{ width: 120, height: 120, borderRadius: 60 }} />
      </View>

      <View style={{ marginBottom: 20 }}>
        <Text style={{ fontSize: FONT_SIZE.md, color: COLORS.dark_gray }}>Nome</Text>
        <TextInput
          style={{
            width: '100%',
            backgroundColor: COLORS.white,
            padding: 10,
            borderRadius: 6,
            borderWidth: 1,
            borderColor: COLORS.light_gray,
            marginTop: 5,
          }}
          placeholder="Digite seu nome"
          value={name}
          onChangeText={setName}
        />
      </View>

      <View style={{ marginBottom: 30 }}>
        <Text style={{ fontSize: FONT_SIZE.md, color: COLORS.dark_gray }}>Email</Text>
        <TextInput
          style={{
            width: '100%',
            backgroundColor: COLORS.white,
            padding: 10,
            borderRadius: 6,
            borderWidth: 1,
            borderColor: COLORS.light_gray,
            marginTop: 5,
          }}
          placeholder="Digite seu email"
          value={email}
          onChangeText={setEmail}
        />
      </View>

      <TouchableOpacity
        style={{
          width: '100%',
          backgroundColor: COLORS.dark_green,
          borderRadius: 6,
          marginBottom: 20,
        }}
      >
        <Text
          style={{
            fontSize: FONT_SIZE.md,
            color: COLORS.white,
            padding: 14,
            textAlign: 'center',
          }}
        >
          Editar Perfil
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          width: '100%',
          backgroundColor: COLORS.dark_gray,
          borderRadius: 6,
        }}
      >
        <Text
          style={{
            fontSize: FONT_SIZE.md,
            color: COLORS.white,
            padding: 14,
            textAlign: 'center',
          }}
        >
          Sair
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
}
