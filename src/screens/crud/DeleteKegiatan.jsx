import React from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import GlobalStyle from '../../styles/GlobalStyle';

export default function DeleteKegiatan({ route, navigation }) {
  const { kegiatan } = route.params;

  const handleDelete = () => {
    Alert.alert(
      'Konfirmasi Hapus',
      `Apakah kamu yakin ingin menghapus kegiatan "${kegiatan.nama}"?`,
      [
        { text: 'Batal', style: 'cancel' },
        {
          text: 'Hapus',
          style: 'destructive',
          onPress: () => {
            console.log('Kegiatan dihapus:', kegiatan.id);
            navigation.goBack();
          },
        },
      ]
    );
  };

  return (
    <View style={GlobalStyle.screen}>
      <Text style={[GlobalStyle.header, { color: '#40513B' }]}>
        Hapus Data Kegiatan
      </Text>

      <View style={{ marginVertical: 20 }}>
        <Text style={GlobalStyle.cardTitle}>{kegiatan.nama}</Text>
        <Text style={GlobalStyle.cardText}>Tanggal: {kegiatan.tanggal}</Text>
        <Text style={GlobalStyle.cardText}>Lokasi: {kegiatan.lokasi}</Text>
      </View>

      <TouchableOpacity
        style={[GlobalStyle.button, { backgroundColor: '#d9534f' }]}
        onPress={handleDelete}
      >
        <Text style={GlobalStyle.buttonText}>Hapus Data</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[GlobalStyle.button, { backgroundColor: '#9DC08B', marginTop: 10 }]}
        onPress={() => navigation.goBack()}
      >
        <Text style={GlobalStyle.buttonText}>Batal</Text>
      </TouchableOpacity>
    </View>
  );
}
