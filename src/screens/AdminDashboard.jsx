import React, { useState, useContext } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import GlobalStyle from '../styles/GlobalStyle';
import { AuthContext } from '../context/AuthContext';

export default function AdminDashboard({ navigation }) {
  const { logout } = useContext(AuthContext);

  const [ormawa, setOrmawa] = useState([
    { id: 1, nama: 'HIMATIKA', deskripsi: 'Organisasi Mahasiswa Informatika' },
  ]);

  const [ukm, setUKM] = useState([
    { id: 1, nama: 'UKM Musik', deskripsi: 'Unit Kegiatan Musik Kampus' },
  ]);

  const [kegiatan, setKegiatan] = useState([
    { id: 1, judul: 'Seminar Teknologi', tanggal: '20 Nov 2025' },
  ]);

  const handleLogout = () => {
    logout();
    navigation.reset({
      index: 0,
      routes: [{ name: 'PublicHome' }],
    });
  };

  return (
    <View style={[GlobalStyle.screen, { backgroundColor: '#F6FFF2' }]}>
      {/* HEADER */}
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: 25,
          backgroundColor: '#E8F3E8',
          paddingVertical: 12,
          paddingHorizontal: 15,
          borderRadius: 15,
          shadowColor: '#40513B',
          shadowOpacity: 0.15,
          shadowRadius: 4,
          elevation: 3,
          borderWidth: 1,
          borderColor: '#C7D8C0',
        }}
      >
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Image
            source={require('../../assets/morin.jpg')}
            style={{
              width: 55,
              height: 55,
              borderRadius: 28,
              borderWidth: 2,
              borderColor: '#9DC08B',
              marginRight: 12,
            }}
          />
          <View>
            <Text
              style={{
                fontSize: 18,
                fontWeight: 'bold',
                color: '#40513B',
              }}
            >
              Admin Dashboard
            </Text>
            <Text style={{ color: '#5A6F4C', fontSize: 13 }}>
              SIMAK-UIN
            </Text>
          </View>
        </View>

      </View>

      {/* CARD MENU */}
      <TouchableOpacity
        style={{
          backgroundColor: '#FFFFFF',
          borderRadius: 15,
          padding: 18,
          marginBottom: 15,
          marginHorizontal: 10,
          borderWidth: 1,
          borderColor: '#BFD8B8',
          shadowColor: '#40513B',
          shadowOpacity: 0.1,
          shadowRadius: 3,
          elevation: 2,
        }}
        onPress={() => navigation.navigate('AdminOrmawaCRUD', { ormawa, setOrmawa })}
      >
        <Text style={{ fontWeight: 'bold', color: '#40513B', fontSize: 16 }}>
          ORMAWA
        </Text>
        <Text style={{ color: '#555', fontSize: 13, marginTop: 4 }}>
          Kelola data organisasi mahasiswa
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          backgroundColor: '#FFFFFF',
          borderRadius: 15,
          padding: 18,
          marginBottom: 15,
          marginHorizontal: 10,
          borderWidth: 1,
          borderColor: '#BFD8B8',
          shadowColor: '#40513B',
          shadowOpacity: 0.1,
          shadowRadius: 3,
          elevation: 2,
        }}
        onPress={() => navigation.navigate('AdminUKMCRUD', { ukm, setUKM })}
      >
        <Text style={{ fontWeight: 'bold', color: '#40513B', fontSize: 16 }}>
          UKM
        </Text>
        <Text style={{ color: '#555', fontSize: 13, marginTop: 4 }}>
          Kelola data Unit Kegiatan Mahasiswa
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          backgroundColor: '#FFFFFF',
          borderRadius: 15,
          padding: 18,
          marginBottom: 15,
          marginHorizontal: 10,
          borderWidth: 1,
          borderColor: '#BFD8B8',
          shadowColor: '#40513B',
          shadowOpacity: 0.1,
          shadowRadius: 3,
          elevation: 2,
        }}
        onPress={() => navigation.navigate('AdminKegiatanCRUD', { kegiatan, setKegiatan })}
      >
        <Text style={{ fontWeight: 'bold', color: '#40513B', fontSize: 16 }}>
          Kegiatan Kampus
        </Text>
        <Text style={{ color: '#555', fontSize: 13, marginTop: 4 }}>
          Kelola data kegiatan kampus
        </Text>
      </TouchableOpacity>

      {/* NAVIGASI BAWAH */}
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
        <TouchableOpacity onPress={() => navigation.navigate('AdminDashboard')}>
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
