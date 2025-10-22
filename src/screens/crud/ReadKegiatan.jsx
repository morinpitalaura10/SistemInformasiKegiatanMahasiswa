import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import GlobalStyle from '../../styles/GlobalStyle';

export default function ReadKegiatan({ navigation }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Dummy data (nanti bisa diganti fetch dari API)
    setData([
      { id: 1, nama: 'Seminar Teknologi 2025', tanggal: '2025-12-10', lokasi: 'Aula UIN' },
      { id: 2, nama: 'Pelatihan Kepemimpinan', tanggal: '2025-11-21', lokasi: 'Gedung FST' },
      { id: 3, nama: 'Lomba Desain Poster', tanggal: '2025-10-30', lokasi: 'Online' },
    ]);
  }, []);

  return (
    <View style={[GlobalStyle.screen, { backgroundColor: '#FFFBE9' }]}>
      <Text style={[GlobalStyle.header, { color: '#40513B', marginBottom: 10 }]}>
        Daftar Kegiatan Kampus
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
            <Text>📅 {item.tanggal}</Text>
            <Text>📍 {item.lokasi}</Text>
          </View>
        ))}
      </ScrollView>
      
      <TouchableOpacity onPress={() => navigation.navigate('UpdateKegiatan', { kegiatan: item })}>
        <Ionicons name="create-outline" size={22} color="#40513B" />
      </TouchableOpacity>

      <TouchableOpacity
        style={[GlobalStyle.button, { backgroundColor: '#609966', marginTop: 10 }]}
        onPress={() => navigation.navigate('TambahKegiatan')}
      >
        <Ionicons name="add-circle-outline" size={20} color="#fff" />
        <Text style={[GlobalStyle.buttonText, { marginLeft: 8 }]}>Tambah Kegiatan</Text>
      </TouchableOpacity>
    </View>
  );
}
