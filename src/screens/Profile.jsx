import React, { useContext } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { AuthContext } from '../context/AuthContext';
import GlobalStyle from '../styles/GlobalStyle';

export default function Profile({ navigation }) {
  const { user, logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout();
    navigation.reset({
      index: 0,
      routes: [{ name: 'SIMAK-UIN' }],
    });
  };

  return (
    <View
      style={[
        GlobalStyle.screen,
        { backgroundColor: '#F6FFF2', alignItems: 'center' },
      ]}
    >
      {/* ===== Header ===== */}
      <Text
        style={{
          fontSize: 24,
          fontWeight: '700',
          color: '#40513B',
          marginBottom: 20,
        }}
      >
        Profil Admin
      </Text>

      {/* ===== Card Profil ===== */}
      <View
        style={{
          width: '100%',
          backgroundColor: '#FFFFFF',
          borderRadius: 20,
          paddingVertical: 25,
          paddingHorizontal: 20,
          borderWidth: 1.5,
          borderColor: '#C7D2C3',
          shadowColor: '#000',
          shadowOpacity: 0.08,
          shadowOffset: { width: 0, height: 3 },
          shadowRadius: 5,
          elevation: 3,
          alignItems: 'center',
        }}
      >
        <Image
          source={require('../../assets/morin.jpg')}
          style={{
            width: 100,
            height: 100,
            borderRadius: 50,
            marginBottom: 15,
          }}
        />
        <Text style={{ fontSize: 20, fontWeight: '600', color: '#40513B' }}>
          {user?.username || 'Morin Pita Laura'}
        </Text>
        <Text style={{ color: '#6B7280', fontSize: 14 }}>
          {user?.role === 'admin' ? 'Administrator SIMAK-UIN' : 'Mahasiswa Aktif'}
        </Text>

        {/* Info tambahan */}
        <View style={{ marginTop: 25, width: '100%' }}>
          <Text style={GlobalStyle.profileText}>📧 Email : morin10@uin.ac.id</Text>
          <Text style={[GlobalStyle.profileText, { marginTop: 8 }]}>
            🏫 Fakultas : Sains dan Teknologi
          </Text>
          <Text style={[GlobalStyle.profileText, { marginTop: 8 }]}>
            🎓 Prodi : Informatika
          </Text>
        </View>

      </View>

      {/* ===== Footer Navigasi ===== */}
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
          borderTopColor: '#C7D2C3',
          paddingVertical: 10,
        }}
      >
        <TouchableOpacity
          onPress={() =>
            navigation.navigate(
              user?.role === 'admin' ? 'AdminDashboard' : 'UserDashboard'
            )
          }
        >
          <Ionicons name="home-outline" size={26} color="#40513B" />
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
