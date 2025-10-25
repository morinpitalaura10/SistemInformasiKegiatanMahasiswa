import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import GlobalStyle from '../../styles/GlobalStyle';

export default function TambahKegiatan({ navigation }) {
  const [judul, setJudul] = useState('');
  const [tanggal, setTanggal] = useState('');
  const [deskripsi, setDeskripsi] = useState('');

  const handleSimpan = () => {
    alert('Kegiatan berhasil ditambahkan (simulasi) 💚');
    navigation.navigate('AdminKegiatanCRUD');
  };

  return (
    <View style={[GlobalStyle.screen, { backgroundColor: '#F6FFF2' }]}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}
      >
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 90 }}>
          {/* HEADER */}
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
              Tambah Kegiatan
            </Text>
            <Text style={{ color: '#5A6F4C', fontSize: 13 }}>SIMAK-UIN</Text>
          </View>

          {/* FORM CARD */}
          <View
            style={{
              backgroundColor: '#FFFFFF',
              marginHorizontal: 20,
              marginTop: 25,
              borderRadius: 15,
              padding: 20,
              shadowColor: '#40513B',
              shadowOpacity: 0.1,
              shadowRadius: 6,
              elevation: 2,
              borderWidth: 1,
              borderColor: '#C7D8C0',
            }}
          >
            <TextInput
              placeholder="Judul Kegiatan"
              value={judul}
              onChangeText={setJudul}
              style={GlobalStyle.input}
              placeholderTextColor="#7D8F69"
            />
            <TextInput
              placeholder="Tanggal (YYYY-MM-DD)"
              value={tanggal}
              onChangeText={setTanggal}
              style={GlobalStyle.input}
              placeholderTextColor="#7D8F69"
            />
            <TextInput
              placeholder="Deskripsi"
              value={deskripsi}
              onChangeText={setDeskripsi}
              style={[GlobalStyle.input, { height: 90 }]}
              placeholderTextColor="#7D8F69"
              multiline
            />

            <TouchableOpacity
              style={[
                GlobalStyle.button,
                {
                  backgroundColor: '#9DC08B',
                  marginTop: 15,
                  borderRadius: 10,
                  shadowColor: '#40513B',
                  shadowOpacity: 0.2,
                  shadowRadius: 4,
                  elevation: 3,
                },
              ]}
              onPress={handleSimpan}
            >
              <Text style={[GlobalStyle.buttonText, { color: '#FFFFFF', fontWeight: 'bold' }]}>
                Simpan Kegiatan
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>

        {/* NAVIGASI BAWAH - sama kayak AdminKegiatanCRUD */}
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

          <TouchableOpacity
            onPress={() => {
              navigation.reset({ index: 0, routes: [{ name: 'PublicHome' }] });
            }}
          >
            <Ionicons name="log-out-outline" size={26} color="#40513B" />
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
}
