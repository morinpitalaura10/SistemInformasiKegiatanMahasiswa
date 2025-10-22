import React, { useState, useContext } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Alert } from 'react-native';
import GlobalStyle from '../styles/GlobalStyle';
import { Ionicons } from '@expo/vector-icons';
import { AuthContext } from '../context/AuthContext';

export default function AdminOrmawaCRUD({ navigation, route }) {
  const { logout } = useContext(AuthContext);
  const [ormawa, setOrmawa] = useState(
    route?.params?.ormawa || [
      { id: 1, nama: 'BEM UIN', deskripsi: 'Badan Eksekutif Mahasiswa Universitas' },
      { id: 2, nama: 'DEMA Fakultas', deskripsi: 'Dewan Eksekutif Mahasiswa Fakultas' },
    ]
  );

  const handleDelete = (id) => {
    Alert.alert('Hapus Data', 'Yakin mau hapus organisasi ini?', [
      { text: 'Batal', style: 'cancel' },
      {
        text: 'Hapus',
        onPress: () => {
          const updated = ormawa.filter((item) => item.id !== id);
          setOrmawa(updated);
          Alert.alert('Berhasil', 'Data Ormawa dihapus 💚');
        },
      },
    ]);
  };

  const handleLogout = () => {
    logout();
    navigation.reset({ index: 0, routes: [{ name: 'PublicHome' }] });
  };

  return (
    <View style={GlobalStyle.screen}>
      <Text style={[GlobalStyle.header, { marginBottom: 20 }]}>Kelola Ormawa</Text>

      <ScrollView style={{ marginBottom: 80 }}>
        {ormawa.map((item) => (
          <View key={item.id} style={[GlobalStyle.card, { marginBottom: 15 }]}>
            <Text style={GlobalStyle.cardTitle}>{item.nama}</Text>
            <Text>{item.deskripsi}</Text>

            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10 }}>
              <TouchableOpacity
                onPress={() => navigation.navigate('UpdateOrmawa', { item, ormawa, setOrmawa })}
              >
                <Text style={{ color: '#40513B', fontWeight: 'bold' }}>✏️ Edit</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleDelete(item.id)}>
                <Text style={{ color: 'red', fontWeight: 'bold' }}>🗑️ Hapus</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}

        <TouchableOpacity
          style={[GlobalStyle.button, { marginVertical: 25 }]}
          onPress={() => navigation.navigate('TambahOrmawa', { ormawa, setOrmawa })}
        >
          <Text style={GlobalStyle.buttonText}>+ Tambah Ormawa</Text>
        </TouchableOpacity>
      </ScrollView>

      {/* Footer Navigasi */}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
          backgroundColor: '#E8F3E8',
          borderTopWidth: 1,
          borderTopColor: '#C7D2C5',
          paddingVertical: 10,
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
        }}
      >
        <TouchableOpacity onPress={() => navigation.navigate('AdminDashboard')}>
          <Ionicons name="home-outline" size={26} color="#40513B" />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
          <Ionicons name="person-circle-outline" size={26} color="#40513B" />
        </TouchableOpacity>

        <TouchableOpacity onPress={handleLogout}>
          <Ionicons name="log-out-outline" size={26} color="#40513B" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
