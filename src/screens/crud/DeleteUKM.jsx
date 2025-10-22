import React from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import GlobalStyle from '../../styles/GlobalStyle';

export default function DeleteUKM({ route, navigation }) {
  const { ukm } = route.params;

  const handleDelete = () => {
    Alert.alert(
      'Konfirmasi Hapus',
      `Apakah kamu yakin ingin menghapus UKM "${ukm.nama}"?`,
      [
        { text: 'Batal', style: 'cancel' },
        {
          text: 'Hapus',
          style: 'destructive',
          onPress: () => {
            console.log('UKM dihapus:', ukm.id);
            navigation.goBack();
          },
        },
      ]
    );
  };

  return (
    <View style={GlobalStyle.screen}>
      <Text style={[GlobalStyle.header, { color: '#40513B' }]}>
        Hapus Data UKM
      </Text>

      <View style={{ marginVertical: 20 }}>
        <Text style={GlobalStyle.cardTitle}>{ukm.nama}</Text>
        <Text style={GlobalStyle.cardText}>Pembina: {ukm.pembina}</Text>
        <Text style={GlobalStyle.cardText}>Kegiatan: {ukm.kegiatan}</Text>
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
