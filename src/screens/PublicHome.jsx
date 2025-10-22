import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native';
import GlobalStyle from '../styles/GlobalStyle';
import { Ionicons } from '@expo/vector-icons';

export default function PublicHome({ navigation }) {
  const kegiatanList = [
    {
      id: 1,
      judul: 'Organisasi Mahasiswa UIN [ORMAWA]',
      deskripsi: 'Jelajahi berbagai organisasi mahasiswa aktif di kampus!',
      image: require('../../assets/ormawa/ormawa1.jpg'),
      page: 'ormawa',
    },
    {
      id: 2,
      judul: 'Unit Kegiatan Mahasiswa UIN [UKM]',
      deskripsi: 'Temukan UKM yang sesuai minat dan bakatmu!',
      image: require('../../assets/ukm/ukm1.jpg'),
      page: 'ukm',
    },
    {
      id: 3,
      judul: 'Acara Kampus UIN',
      deskripsi: 'Ikuti berbagai event menarik yang diadakan di kampus UIN!',
      image: require('../../assets/acara/if1.jpg'),
      page: 'acarakampus',
    },
  ];

  return (
    <View style={[GlobalStyle.screen, { backgroundColor: '#F6FFF2' }]}>
      {/* Header */}
      <View
        style={{
          borderWidth: 2,
          borderColor: '#A5C49A',
          borderRadius: 15,
          padding: 15,
          marginBottom: 20,
          alignItems: 'center',
          backgroundColor: '#E8F3E8',
          shadowColor: '#40513B',
          shadowOpacity: 0.2,
          shadowRadius: 4,
          elevation: 3,
        }}
      >
        <Text
          style={[
            GlobalStyle.header,
            { marginBottom: 6, color: '#40513B', fontWeight: 'bold' },
          ]}
        >
          SIMAK-UIN
        </Text>
        <Text style={{ color: '#5A6F4C', fontSize: 15 }}>
          Sistem Informasi Kegiatan Mahasiswa
        </Text>
      </View>

      {/* Daftar kegiatan */}
      <ScrollView style={{ flex: 1, marginBottom: 80 }}>
        {kegiatanList.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={{
              marginBottom: 20,
              backgroundColor: '#FFFFFF',
              borderRadius: 15,
              shadowColor: '#40513B',
              shadowOpacity: 0.15,
              shadowRadius: 4,
              elevation: 2,
              borderWidth: 1,
              borderColor: '#C7D8C0',
              overflow: 'hidden',
              marginHorizontal: 12,
            }}
            onPress={() => navigation.navigate(item.page)}
          >
            <Image
              source={item.image}
              style={{
                width: '100%',
                height: 150,
                borderTopLeftRadius: 15,
                borderTopRightRadius: 15,
              }}
            />
            <View style={{ padding: 14 }}>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: '700',
                  color: '#40513B',
                  marginBottom: 4,
                }}
              >
                {item.judul}
              </Text>
              <Text style={{ color: '#555', fontSize: 14 }}>
                {item.deskripsi}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>

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
        <TouchableOpacity onPress={() => navigation.navigate('PublicHome')}>
          <Ionicons name="home-outline" size={26} color="#40513B" />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('About')}>
          <Ionicons name="information-circle-outline" size={26} color="#40513B" />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Ionicons name="person-circle-outline" size={26} color="#40513B" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
