import React, { useContext, useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import GlobalStyle from '../styles/GlobalStyle';
import { AuthContext } from '../context/AuthContext';

export default function AdminUKMCRUD({ navigation, route }) {
  const { logout } = useContext(AuthContext);
  const [ukm, setUkm] = useState(
    route?.params?.ukm || [
      { id: 1, nama: 'UKM Musik UIN', pembina: 'Bapak Rahmad S.Pd' },
      { id: 2, nama: 'UKM Bahasa Asing', pembina: 'Ibu Lilis M.A' },
      { id: 3, nama: 'UKM Pecinta Alam', pembina: 'Bapak Fajar, M.Si' },
    ]
  );

  const handleDelete = (id) => {
    Alert.alert('Hapus Data', 'Yakin mau hapus UKM ini?', [
      { text: 'Batal', style: 'cancel' },
      {
        text: 'Hapus',
        onPress: () => {
          const updated = ukm.filter((item) => item.id !== id);
          setUkm(updated);
          Alert.alert('Berhasil', 'Data UKM dihapus 💚');
        },
      },
    ]);
  };

  const handleLogout = () => {
    logout();
    navigation.reset({ index: 0, routes: [{ name: 'PublicHome' }] });
  };

  return (
    <View style={[GlobalStyle.screen, { backgroundColor: '#F6FFF2' }]}>
      {/* ===== HEADER ===== */}
      <View
        style={{
          alignItems: 'center',
          backgroundColor: '#E8F3E8',
          marginHorizontal: 20,
          marginTop: 25,
          paddingVertical: 15,
          borderRadius: 15,
          shadowColor: '#40513B',
          shadowOpacity: 0.15,
          shadowRadius: 4,
          elevation: 3,
          borderWidth: 1,
          borderColor: '#C7D8C0',
        }}
      >
        <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#40513B' }}>
          Kelola Data UKM Kampus
        </Text>
        <Text style={{ color: '#5A6F4C', fontSize: 13 }}>SIMAK-UIN</Text>
      </View>

      {/* ===== DAFTAR UKM ===== */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ marginTop: 25, marginHorizontal: 20, marginBottom: 90 }}
      >
        {ukm.map((item) => (
          <View
            key={item.id}
            style={{
              backgroundColor: '#FFFFFF',
              borderColor: '#C7D8C0',
              borderWidth: 1,
              borderRadius: 15,
              padding: 15,
              marginBottom: 15,
              shadowColor: '#40513B',
              shadowOpacity: 0.1,
              shadowRadius: 5,
              elevation: 2,
            }}
          >
            <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#40513B' }}>
              {item.nama}
            </Text>
            <Text style={{ color: '#6B7280', marginBottom: 10 }}>
              👨‍🏫 Pembina: {item.pembina}
            </Text>

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 5,
              }}
            >
              <TouchableOpacity
                style={{
                  backgroundColor: '#9DC08B',
                  paddingVertical: 6,
                  paddingHorizontal: 15,
                  borderRadius: 10,
                  shadowColor: '#40513B',
                  shadowOpacity: 0.2,
                  shadowRadius: 4,
                  elevation: 2,
                }}
                onPress={() =>
                  navigation.navigate('UpdateUKM', { item, ukm, setUkm })
                }
              >
                <Text style={{ color: '#fff', fontWeight: 'bold' }}>✏️ Edit</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={{
                  backgroundColor: '#E57373',
                  paddingVertical: 6,
                  paddingHorizontal: 15,
                  borderRadius: 10,
                  shadowColor: '#40513B',
                  shadowOpacity: 0.2,
                  shadowRadius: 4,
                  elevation: 2,
                }}
                onPress={() => handleDelete(item.id)}
              >
                <Text style={{ color: '#fff', fontWeight: 'bold' }}>🗑️ Hapus</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}

        <TouchableOpacity
          style={[
            GlobalStyle.button,
            {
              backgroundColor: '#609966',
              borderRadius: 12,
              shadowColor: '#40513B',
              shadowOpacity: 0.3,
              shadowRadius: 5,
              elevation: 4,
              marginTop: 15,
            },
          ]}
          onPress={() => navigation.navigate('TambahUKM', { ukm, setUkm })}
        >
          <Text
            style={[GlobalStyle.buttonText, { color: '#fff', fontWeight: 'bold' }]}
          >
            + Tambah UKM
          </Text>
        </TouchableOpacity>
      </ScrollView>

      {/* ===== FOOTER NAVIGASI ===== */}
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
          <Ionicons name="arrow-back" size={26} color="#40513B" />
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
