import React, { useContext } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import GlobalStyle from '../styles/GlobalStyle';
import { AuthContext } from '../context/AuthContext';

export default function ProfileUser({ navigation }) {
  const { user, logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout();
    navigation.reset({
      index: 0,
      routes: [{ name: 'SIMAK-UIN' }],
    });
  };

  return (
    <View style={[GlobalStyle.screen, { backgroundColor: '#F6FFF2' }]}>
      {/* Header */}
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#E8F3E8',
          paddingVertical: 15,
          borderRadius: 12,
          borderWidth: 1,
          borderColor: '#BFD8B8',
          marginBottom: 25,
          shadowColor: '#40513B',
          shadowOpacity: 0.15,
          shadowRadius: 3,
          elevation: 3,
        }}
      >
        <Ionicons name="person-circle-outline" size={26} color="#40513B" style={{ marginRight: 8 }} />
        <Text style={[GlobalStyle.header, { color: '#40513B' }]}>Profil Pengguna</Text>
      </View>

      {/* Konten Utama */}
      <View
        style={{
          backgroundColor: '#FFFFFF',
          borderRadius: 20,
          borderWidth: 1.5,
          borderColor: '#C7D2C3',
          padding: 20,
          alignItems: 'center',
          marginHorizontal: 10,
          shadowColor: '#000',
          shadowOpacity: 0.08,
          shadowRadius: 5,
          elevation: 3,
        }}
      >
        {/* Foto Profil */}
        <Image
          source={require('../../assets/dika.png')}
          style={{
            width: 110,
            height: 110,
            borderRadius: 55,
            marginBottom: 15,
            borderWidth: 2.5,
            borderColor: '#9DC08B',
          }}
        />

        {/* Nama User */}
        <Text
          style={{
            fontSize: 20,
            fontWeight: '700',
            color: '#40513B',
            marginBottom: 3,
          }}
        >
          {user?.name || 'Mahasiswa UIN'}
        </Text>

        {/* Role */}
        <Text
          style={{
            color: '#6B7280',
            fontSize: 14,
            fontStyle: 'italic',
            marginBottom: 15,
          }}
        >
          {user?.role === 'user' ? 'Mahasiswa Aktif' : 'User Mahasiswa'}
        </Text>

        {/* Info Akun */}
        <View
          style={{
            width: '100%',
            backgroundColor: '#F9FFF6',
            borderRadius: 15,
            borderWidth: 1,
            borderColor: '#C7D8C0',
            padding: 15,
          }}
        >
          <Text style={{ fontSize: 15, color: '#40513B', marginBottom: 6 }}>
            📧 <Text style={{ fontWeight: '600' }}>Username:</Text>{' '}
            {user?.username || 'Dika Hasan'}
          </Text>
          <Text style={{ fontSize: 15, color: '#40513B', marginBottom: 6 }}>
            🏫 <Text style={{ fontWeight: '600' }}>Fakultas:</Text> Sains dan Teknologi
          </Text>
          <Text style={{ fontSize: 15, color: '#40513B' }}>
            🎓 <Text style={{ fontWeight: '600' }}>Program Studi:</Text> Informatika
          </Text>
        </View>
      </View>

      

      {/* Bottom Navigation */}
      <View
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
          backgroundColor: '#E8F3E8',
          borderTopWidth: 1,
          borderTopColor: '#C7D2C5',
          paddingVertical: 10,
        }}
      >
        <TouchableOpacity onPress={() => navigation.navigate('UserDashboard')}>
          <Ionicons name="arrow-back" size={26} color="#40513B" />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
          <Ionicons name="person-circle-outline" size={26} color="#40513B" />
        </TouchableOpacity>

        <TouchableOpacity onPress={handleLogout}>
          <Ionicons name="log-out-outline" size={26} color="#40513B" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
