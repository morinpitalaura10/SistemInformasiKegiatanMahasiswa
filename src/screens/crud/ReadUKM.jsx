import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import GlobalStyle from '../../styles/GlobalStyle';

export default function ReadUKM({ navigation }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData([
      { id: 1, nama: 'UKM Musik', pembina: 'Pak Rafi', kegiatan: 'Festival Band Kampus' },
      { id: 2, nama: 'UKM Fotografi', pembina: 'Bu Rina', kegiatan: 'Pameran Foto Mahasiswa' },
      { id: 3, nama: 'UKM Bahasa Inggris', pembina: 'Pak Adi', kegiatan: 'English Debate Contest' },
    ]);
  }, []);

  return (
    <View style={[GlobalStyle.screen, { backgroundColor: '#FFFBE9' }]}>
      <Text style={[GlobalStyle.header, { color: '#40513B', marginBottom: 10 }]}>
        Daftar Unit Kegiatan Mahasiswa
      </Text>

      <ScrollView>
        {data.map((item) => (
          <View
            key={item.id}
            style={{
              backgroundColor: '#F6FFF0',
              borderColor: '#B9D8A7',
              borderWidth: 1,
              borderRadius: 10,
              padding: 12,
              marginBottom: 12,
            }}
          >
            <Text style={[GlobalStyle.cardTitle]}>{item.nama}</Text>
            <Text>👩‍🏫 Pembina: {item.pembina}</Text>
            <Text>🎯 Kegiatan Unggulan: {item.kegiatan}</Text>
          </View>
        ))}
      </ScrollView>

      <TouchableOpacity onPress={() => navigation.navigate('UpdateUKM', { UKM: item })}>
        <Ionicons name="create-outline" size={22} color="#40513B" />
      </TouchableOpacity>

      <TouchableOpacity
        style={[GlobalStyle.button, { backgroundColor: '#609966', marginTop: 10 }]}
        onPress={() => navigation.navigate('TambahUKM')}
      >
        <Ionicons name="add-circle-outline" size={20} color="#fff" />
        <Text style={[GlobalStyle.buttonText, { marginLeft: 8 }]}>Tambah UKM</Text>
      </TouchableOpacity>
    </View>
  );
}
