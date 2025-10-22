import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import GlobalStyle from '../../styles/GlobalStyle';

export default function UpdateOrmawa({ route, navigation }) {
  const { ormawa } = route.params;
  const [nama, setNama] = useState('');
  const [ketua, setKetua] = useState('');
  const [bidang, setBidang] = useState('');

  useEffect(() => {
    if (ormawa) {
      setNama(ormawa.nama);
      setKetua(ormawa.ketua);
      setBidang(ormawa.bidang);
    }
  }, [ormawa]);

  const handleUpdate = () => {
    console.log('Data Ormawa diperbarui:', { nama, ketua, bidang });
    navigation.goBack();
  };

  return (
    <View style={GlobalStyle.screen}>
      <Text style={[GlobalStyle.header, { color: '#40513B' }]}>
        Edit Data Ormawa
      </Text>

      <TextInput
        style={GlobalStyle.input}
        placeholder="Nama Ormawa"
        value={nama}
        onChangeText={setNama}
      />
      <TextInput
        style={GlobalStyle.input}
        placeholder="Nama Ketua"
        value={ketua}
        onChangeText={setKetua}
      />
      <TextInput
        style={GlobalStyle.input}
        placeholder="Bidang"
        value={bidang}
        onChangeText={setBidang}
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
