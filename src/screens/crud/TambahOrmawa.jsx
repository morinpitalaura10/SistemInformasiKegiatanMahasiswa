import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import GlobalStyle from '../../styles/GlobalStyle';

export default function TambahOrmawa({ navigation }) {
  const [nama, setNama] = useState('');
  const [ketua, setKetua] = useState('');
  const [deskripsi, setDeskripsi] = useState('');

  const handleSimpan = () => {
    alert('Data ORMAWA berhasil ditambahkan (simulasi)');
    navigation.navigate('AdminOrmawaCRUD');
  };

  return (
    <View style={GlobalStyle.screen}>
      <Text style={GlobalStyle.header}>Tambah ORMAWA</Text>

      <TextInput
        placeholder="Nama Organisasi"
        value={nama}
        onChangeText={setNama}
        style={GlobalStyle.input}
      />
      <TextInput
        placeholder="Nama Ketua"
        value={ketua}
        onChangeText={setKetua}
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
