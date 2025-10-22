import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import GlobalStyle from '../../styles/GlobalStyle';

export default function UpdateUKM({ route, navigation }) {
  const { ukm } = route.params;
  const [nama, setNama] = useState('');
  const [pembina, setPembina] = useState('');
  const [kegiatan, setKegiatan] = useState('');

  useEffect(() => {
    if (ukm) {
      setNama(ukm.nama);
      setPembina(ukm.pembina);
      setKegiatan(ukm.kegiatan);
    }
  }, [ukm]);

  const handleUpdate = () => {
    console.log('Data UKM diperbarui:', { nama, pembina, kegiatan });
    navigation.goBack();
  };

  return (
    <View style={GlobalStyle.screen}>
      <Text style={[GlobalStyle.header, { color: '#40513B' }]}>
        Edit Data UKM
      </Text>

      <TextInput
        style={GlobalStyle.input}
        placeholder="Nama UKM"
        value={nama}
        onChangeText={setNama}
      />
      <TextInput
        style={GlobalStyle.input}
        placeholder="Nama Pembina"
        value={pembina}
        onChangeText={setPembina}
      />
      <TextInput
        style={GlobalStyle.input}
        placeholder="Kegiatan Utama"
        value={kegiatan}
        onChangeText={setKegiatan}
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
