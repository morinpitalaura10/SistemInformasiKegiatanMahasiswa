import React, { useState, useContext } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, Image } from 'react-native';
import GlobalStyle from '../styles/GlobalStyle';
import { AuthContext } from '../context/AuthContext';

export default function Login({ navigation }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useContext(AuthContext);

  const handleLogin = () => {
    const success = login(username, password);
    if (!success) {
      Alert.alert('Login Gagal', 'Periksa kembali username dan password kamu, ya 💚');
    }
  };

  return (
    <View
      style={[
        GlobalStyle.screen,
        {
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#F6FFF2',
          paddingHorizontal: 20,
        },
      ]}
    >
      {/* ===== Card Container ===== */}
      <View
        style={{
          width: '100%',
          backgroundColor: '#FFFFFF',
          borderRadius: 20,
          paddingVertical: 30,
          paddingHorizontal: 25,
          borderWidth: 1.2,
          borderColor: '#C7D2C3',
          shadowColor: '#000',
          shadowOpacity: 0.08,
          shadowOffset: { width: 0, height: 3 },
          shadowRadius: 5,
          elevation: 3,
        }}
      >
        {/* Logo UIN */}
        <View style={{ alignItems: 'center', marginBottom: 15 }}>
          <Image
            source={require('../../assets/logoUIN.png')}
            style={{
              width: 100,
              height: 100,
              resizeMode: 'contain',
              marginBottom: 10,
            }}
          />
          <Text
            style={{
              fontSize: 22,
              fontWeight: '700',
              color: '#40513B',
              textAlign: 'center',
            }}
          >
            Login SIMAK-UIN
          </Text>
          <Text
            style={{
              fontSize: 14,
              color: '#6B7280',
              textAlign: 'center',
              marginTop: 4,
              fontStyle: 'italic',
            }}
          >
            Sistem Informasi Mahasiswa Kampus
          </Text>
        </View>

        {/* ===== Input username ===== */}
        <TextInput
          placeholder="Username"
          placeholderTextColor="#888"
          value={username}
          onChangeText={setUsername}
          style={[
            GlobalStyle.input,
            {
              width: '100%',
              backgroundColor: '#F0F7F2',
              borderRadius: 12,
              marginBottom: 12,
              borderWidth: 1,
              borderColor: '#C7D2C3',
            },
          ]}
        />

        {/* ===== Input password ===== */}
        <TextInput
          placeholder="Password"
          placeholderTextColor="#888"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          style={[
            GlobalStyle.input,
            {
              width: '100%',
              backgroundColor: '#F0F7F2',
              borderRadius: 12,
              borderWidth: 1,
              borderColor: '#C7D2C3',
            },
          ]}
        />

        {/* ===== Tombol Login ===== */}
        <TouchableOpacity
          style={[
            GlobalStyle.button,
            {
              width: '100%',
              marginTop: 20,
              backgroundColor: '#40513B',
              borderRadius: 12,
            },
          ]}
          onPress={handleLogin}
        >
          <Text
            style={[
              GlobalStyle.buttonText,
              { color: '#fff', fontSize: 16, letterSpacing: 0.5 },
            ]}
          >
            Masuk
          </Text>
        </TouchableOpacity>

        {/* ===== Tombol kembali ===== */}
        <TouchableOpacity
          style={[
            GlobalStyle.button,
            {
              width: '100%',
              backgroundColor: '#E8F3E8',
              marginTop: 12,
              borderRadius: 12,
              borderWidth: 1,
              borderColor: '#C7D2C3',
            },
          ]}
          onPress={() => navigation.navigate('PublicHome')}
        >
          <Text
            style={[
              GlobalStyle.buttonText,
              { color: '#40513B', fontSize: 15 },
            ]}
          >
            ← Kembali ke Home
          </Text>
        </TouchableOpacity>
      </View>

      {/* Info bawah */}
      <Text
        style={{
          marginTop: 25,
          textAlign: 'center',
          color: '#555',
          fontStyle: 'italic',
          fontSize: 13,
        }}
      >
        Gunakan akun Admin / User | Password default: 12345
      </Text>
    </View>
  );
}
