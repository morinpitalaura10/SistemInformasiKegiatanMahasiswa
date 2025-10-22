import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import GlobalStyle from '../../styles/GlobalStyle';

export default function TambahUKM({ navigation }) {
  const [nama, setNama] = useState('');
  const [bidang, setBidang] = useState('');
  const [deskripsi, setDeskripsi] = useState('');

  const handleSimpan = () => {
    alert('Data UKM berhasil ditambahkan (simulasi)');
    navigation.navigate('AdminUKMCRUD');
  };

  return (
    <View style={GlobalStyle.screen}>
      <Text style={GlobalStyle.header}>Tambah UKM</Text>

      <TextInput
        placeholder="Nama UKM"
        value={nama}
        onChangeText={setNama}
        style={GlobalStyle.input}
      />
      <TextInput
        placeholder="Bidang"
        value={bidang}
        onChangeText={setBidang}
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
