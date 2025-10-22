import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import GlobalStyle from '../styles/GlobalStyle';

export default function UKM({ navigation }) {
  const ukmList = [
    {
      id: 1,
      nama: 'UKM Musik',
      deskripsi: 'Tempat bagi mahasiswa menyalurkan bakat bermusik.',
      tanggal: '18 Okt 2025',
      gambar: require('../../assets/logoUIN.png'),
    },
    {
      id: 2,
      nama: 'UKM Olahraga',
      deskripsi: 'Mewadahi minat olahraga antar fakultas di UIN.',
      tanggal: '10 Okt 2025',
      gambar: require('../../assets/logoUIN.png'),
    },
    {
      id: 3,
      nama: 'UKM Jurnalistik',
      deskripsi: 'Belajar menulis, liputan, dan media kampus.',
      tanggal: '5 Okt 2025',
      gambar: require('../../assets/logoUIN.png'),
    },
  ];

  return (
    <View style={[GlobalStyle.screen, { backgroundColor: '#F6FFF2', paddingHorizontal: 20 }]}>
      <View
        style={{
          borderWidth: 2,
          borderColor: '#9DC08B',
          backgroundColor: '#E8F3E8',
          padding: 15,
          borderRadius: 15,
          alignItems: 'center',
          marginBottom: 20,
        }}
      >
        <Text style={[GlobalStyle.header, { color: '#40513B' }]}>UNIT KEGIATAN MAHASISWA</Text>
        <Text style={{ color: '#40513B', fontSize: 16 }}>Temukan UKM sesuai minatmu</Text>
      </View>

      <ScrollView showsVerticalScrollIndicator={false} style={{ marginBottom: 70 }}>
        {ukmList.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={{
              backgroundColor: '#FFFFFF',
              borderWidth: 1.5,
              borderColor: '#CDE6C0',
              borderRadius: 15,
              marginBottom: 15,
              overflow: 'hidden',
              shadowColor: '#000',
              shadowOpacity: 0.05,
              shadowRadius: 3,
              elevation: 2,
            }}
            onPress={() => navigation.navigate('DetailUKM', { ukm: item })}
          >
            <Image
              source={item.gambar}
              style={{ width: '100%', height: 300 }}
              resizeMode="cover"
            />
            <View style={{ padding: 12 }}>
              <Text style={{ fontSize: 17, fontWeight: 'bold', color: '#40513B' }}>
                {item.nama}
              </Text>
              <Text style={{ color: '#6B7280', fontSize: 13, marginVertical: 3 }}>
                {item.tanggal}
              </Text>
              <Text style={{ color: '#444', fontSize: 14 }}>{item.deskripsi}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Bottom nav */}
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
