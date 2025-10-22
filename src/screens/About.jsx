import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import GlobalStyle from '../styles/GlobalStyle';

export default function About({ navigation }) {
  return (
    <View style={[GlobalStyle.screen, { backgroundColor: '#F6FFF2' }]}>
      {/* ===== Header ===== */}
      {/* Header */}
      <View
        style={{
          borderWidth: 2,
          borderColor: '#A5C49A',
          borderRadius: 15,
          padding: 15,
          marginBottom: 20,
          alignItems: 'center',
          backgroundColor: '#E8F3E8',
          shadowColor: '#40513B',
          shadowOpacity: 0.2,
          shadowRadius: 4,
          elevation: 3,
        }}
        >
        <Text
          style={[
          GlobalStyle.header,
          { marginBottom: 6, color: '#40513B', fontWeight: 'bold' },
          ]}
        >
        Tentang SIMAK-UIN
        </Text>
        <Text style={{ color: '#5A6F4C', fontSize: 15 }}>
        Sistem Informasi Kegiatan Mahasiswa
        </Text>
      </View>

      {/* ===== Konten Deskripsi ===== */}
      <ScrollView
        style={{ flex: 1, marginBottom: 80 }}
        contentContainerStyle={{ paddingHorizontal: 18 }}
      >
        {/* Logo */}
        <View style={{ alignItems: 'center', marginBottom: 16 }}>
          <Image
            source={require('../../assets/logoUIN.png')}
            style={{ width: 120, height: 120, resizeMode: 'contain' }}
          />
        </View>

        <View
          style={{
            backgroundColor: '#FFFFFF',
            borderRadius: 16,
            borderWidth: 1.5,
            borderColor: '#C7D2C3',
            padding: 18,
            marginBottom: 20,
            shadowColor: '#000',
            shadowOpacity: 0.08,
            shadowRadius: 5,
            elevation: 3,
          }}
        >
          <Text style={{ fontSize: 16, color: '#40513B', textAlign: 'justify', lineHeight: 22 }}>
            <Text style={{ fontWeight: 'bold' }}>SIMAK-UIN</Text> adalah aplikasi mobile
            yang dirancang untuk memudahkan mahasiswa mengakses informasi kegiatan kampus
            di lingkungan UIN. Pengguna dapat melihat jadwal, deskripsi, serta dokumentasi
            kegiatan dari berbagai organisasi mahasiswa.
          </Text>

          <Text
            style={{
              fontSize: 16,
              color: '#40513B',
              marginTop: 12,
              lineHeight: 22,
            }}
          >
            ✳️ <Text style={{ fontWeight: 'bold' }}>Ormawa (Organisasi Mahasiswa)</Text> — 
            berisi daftar organisasi kemahasiswaan seperti SEMA, DEMA, HMJ, dan lainnya. 
            Mahasiswa bisa mengenal struktur, program kerja, serta kegiatan mereka.
          </Text>

          <Text
            style={{
              fontSize: 16,
              color: '#40513B',
              marginTop: 12,
              lineHeight: 22,
            }}
          >
            🎯 <Text style={{ fontWeight: 'bold' }}>UKM (Unit Kegiatan Mahasiswa)</Text> — 
            menampung kegiatan minat & bakat seperti seni, olahraga, riset, dan lainnya. 
            Mahasiswa dapat bergabung sesuai passion-nya.
          </Text>

          <Text
            style={{
              fontSize: 16,
              color: '#40513B',
              marginTop: 12,
              lineHeight: 22,
            }}
          >
            🎉 <Text style={{ fontWeight: 'bold' }}>Acara Kampus</Text> — 
            menampilkan agenda terbaru seperti seminar, lomba, pelatihan, dan event tahunan 
            yang diselenggarakan oleh Ormawa atau pihak kampus.
          </Text>

          <Text
            style={{
              fontSize: 16,
              color: '#40513B',
              marginTop: 15,
              textAlign: 'justify',
              lineHeight: 22,
            }}
          >
            Dengan desain yang sederhana dan informatif, SIMAK-UIN bertujuan menjadi pusat
            informasi kegiatan kampus yang mudah diakses oleh mahasiswa dan civitas akademika.
          </Text>
        </View>

        <Text
          style={{
            color: '#6B7280',
            fontSize: 13,
            fontStyle: 'italic',
            textAlign: 'center',
            marginTop: 10,
          }}
        >
          © 2025 SIMAK-UIN | by Kelompok 5 💚
        </Text>
      </ScrollView>

      {/* ===== Bottom Navigation ===== */}
      <View
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
          backgroundColor: '#E8F3E8',
          borderTopWidth: 1,
          borderTopColor: '#C7D2C5',
          paddingVertical: 10,
        }}
      >
        <TouchableOpacity onPress={() => navigation.navigate('PublicHome')}>
          <Ionicons name="home-outline" size={26} color="#40513B" />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('About')}>
          <Ionicons name="information-circle-outline" size={26} color="#40513B" />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Ionicons name="person-circle-outline" size={26} color="#40513B" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
