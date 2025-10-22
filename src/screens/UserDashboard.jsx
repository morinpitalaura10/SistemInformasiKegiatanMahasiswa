import React, { useContext } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import GlobalStyle from '../styles/GlobalStyle';
import { AuthContext } from '../context/AuthContext';

export default function UserDashboard({ navigation }) {
  const { logout } = useContext(AuthContext);

  const cardData = [
    { id: 1, title: 'Seminar Teknologi 2025', desc: 'Ikuti seminar AI & inovasi kampus' },
    { id: 2, title: 'Pelatihan Kepemimpinan', desc: 'Tingkatkan softskill mahasiswa' },
    { id: 3, title: 'Lomba Desain Poster', desc: 'Kreativitas untuk mahasiswa FST' },
  ];

  return (
    <View style={[GlobalStyle.screen, { backgroundColor: '#F6FFF2' }]}>
      {/* HEADER */}
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
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
          marginBottom: 20,
        }}
      >
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Image
            source={require('../../assets/dika.png')}
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
            <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#40513B' }}>
              Halo, Dika 🌿
            </Text>
            <Text style={{ color: '#5A6F4C', fontSize: 13 }}>
              Selamat datang di SIMAK-UIN
            </Text>
          </View>
        </View>

      </View>

      {/* DAFTAR KEGIATAN */}
      <ScrollView contentContainerStyle={{ paddingBottom: 90 }}>
        <Text
          style={{
            fontSize: 18,
            fontWeight: '600',
            color: '#40513B',
            marginBottom: 10,
            textAlign: 'center',
          }}
        >
          Kegiatan Kampus Terbaru 🎓
        </Text>

        {cardData.map((item) => (
          <TouchableOpacity
            key={item.id}
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
            onPress={() => navigation.navigate('DetailKegiatan', { data: item })}
          >
            <Text style={{ fontWeight: 'bold', color: '#40513B', fontSize: 16 }}>
              {item.title}
            </Text>
            <Text style={{ color: '#555', fontSize: 13, marginTop: 4 }}>
              {item.desc}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

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
        <TouchableOpacity onPress={() => navigation.navigate('UserDashboard')}>
          <Ionicons name="home-outline" size={26} color="#40513B" />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
          <Ionicons name="person-circle-outline" size={26} color="#40513B" />
        </TouchableOpacity>

        <TouchableOpacity onPress={logout}>
          <Ionicons name="log-out-outline" size={26} color="#40513B" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
