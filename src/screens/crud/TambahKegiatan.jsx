import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import GlobalStyle from '../../styles/GlobalStyle';

export default function TambahKegiatan({ navigation }) {
  const [judul, setJudul] = useState('');
  const [tanggal, setTanggal] = useState('');
  const [deskripsi, setDeskripsi] = useState('');

  const handleSimpan = () => {
    // tanpa database, langsung balik aja ke halaman CRUD
    alert('Kegiatan berhasil ditambahkan (simulasi)');
    navigation.navigate('AdminKegiatanCRUD');
  };

  return (
    <View style={GlobalStyle.screen}>
      <Text style={GlobalStyle.header}>Tambah Kegiatan</Text>

      <TextInput
        placeholder="Judul Kegiatan"
        value={judul}
        onChangeText={setJudul}
        style={GlobalStyle.input}
      />
      <TextInput
        placeholder="Tanggal (YYYY-MM-DD)"
        value={tanggal}
        onChangeText={setTanggal}
        style={GlobalStyle.input}
      />
      <TextInput
        placeholder="Deskripsi"
        value={deskripsi}
        onChangeText={setDeskripsi}
        style={[GlobalStyle.input, { height: 80 }]}
        multiline
      />

      <TouchableOpacity style={GlobalStyle.button} onPress={handleSimpan}>
        <Text style={GlobalStyle.buttonText}>Simpan</Text>
      </TouchableOpacity>
    </View>
  );
}
