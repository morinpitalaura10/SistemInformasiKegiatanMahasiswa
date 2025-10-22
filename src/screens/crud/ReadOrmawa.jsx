import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import GlobalStyle from '../../styles/GlobalStyle';

export default function ReadOrmawa({ navigation }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData([
      { id: 1, nama: 'BEM UIN Bandung', ketua: 'Ahmad Faiz', bidang: 'Eksekutif Mahasiswa' },
      { id: 2, nama: 'DEMA FST', ketua: 'Nurul Aisyah', bidang: 'Fakultas Sains & Teknologi' },
      { id: 3, nama: 'HMIF', ketua: 'Rafli Ananda', bidang: 'Himpunan Informatika' },
    ]);
  }, []);

  return (
    <View style={[GlobalStyle.screen, { backgroundColor: '#FFFBE9' }]}>
      <Text style={[GlobalStyle.header, { color: '#40513B', marginBottom: 10 }]}>
        Daftar Organisasi Mahasiswa
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
            <Text>👤 Ketua: {item.ketua}</Text>
            <Text>📚 Bidang: {item.bidang}</Text>
          </View>
        ))}
      </ScrollView>
      
      <TouchableOpacity onPress={() => navigation.navigate('UpdateOrmawa', { Ormawa: item })}>
        <Ionicons name="create-outline" size={22} color="#40513B" />
      </TouchableOpacity>

      <TouchableOpacity
        style={[GlobalStyle.button, { backgroundColor: '#609966', marginTop: 10 }]}
        onPress={() => navigation.navigate('TambahOrmawa')}
      >
        <Ionicons name="add-circle-outline" size={20} color="#fff" />
        <Text style={[GlobalStyle.buttonText, { marginLeft: 8 }]}>Tambah Ormawa</Text>
      </TouchableOpacity>
    </View>
  );
}
