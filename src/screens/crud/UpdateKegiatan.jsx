import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import GlobalStyle from '../../styles/GlobalStyle';

export default function UpdateKegiatan({ route, navigation }) {
  const { kegiatan } = route.params; // ambil data kegiatan yang dikirim dari ReadKegiatan
  const [nama, setNama] = useState('');
  const [tanggal, setTanggal] = useState('');
  const [lokasi, setLokasi] = useState('');

  useEffect(() => {
    if (kegiatan) {
      setNama(kegiatan.nama);
      setTanggal(kegiatan.tanggal);
      setLokasi(kegiatan.lokasi);
    }
  }, [kegiatan]);

  const handleUpdate = () => {
    console.log('Data diperbarui:', { nama, tanggal, lokasi });
    navigation.goBack();
  };

  return (
    <View style={GlobalStyle.screen}>
      <Text style={[GlobalStyle.header, { color: '#40513B' }]}>
        Edit Data Kegiatan
      </Text>

      <TextInput
        style={GlobalStyle.input}
        placeholder="Nama Kegiatan"
        value={nama}
        onChangeText={setNama}
      />
      <TextInput
        style={GlobalStyle.input}
        placeholder="Tanggal (YYYY-MM-DD)"
        value={tanggal}
        onChangeText={setTanggal}
      />
      <TextInput
        style={GlobalStyle.input}
        placeholder="Lokasi"
        value={lokasi}
        onChangeText={setLokasi}
      />

      <TouchableOpacity
        style={[GlobalStyle.button, { backgroundColor: '#609966' }]}
        onPress={handleUpdate}
      >
        <Text style={GlobalStyle.buttonText}>Simpan Perubahan</Text>
      </TouchableOpacity>
    </View>
  );
}
