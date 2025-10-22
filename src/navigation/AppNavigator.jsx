import React, { useContext } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthContext } from '../context/AuthContext';

// 📄 screens umum
import PublicHome from '../screens/PublicHome';
import About from '../screens/About';
import Login from '../screens/Login';
import Profile from '../screens/Profile';
import ProfileUser from '../screens/ProfileUser';

// 📄 screens publik tambahan
import Ormawa from '../screens/ormawa';
import Ukm from '../screens/ukm';
import AcaraKampus from '../screens/acarakampus';

// 📄 screens user
import UserDashboard from '../screens/UserDashboard';
import DetailKegiatan from '../screens/DetailKegiatan';

// 📄 screens admin utama
import AdminDashboard from '../screens/AdminDashboard';
import AdminOrmawaCRUD from '../screens/AdminOrmawaCRUD';
import AdminUKMCRUD from '../screens/AdminUKMCRUD';
import AdminKegiatanCRUD from '../screens/AdminKegiatanCRUD';

// 📄 screens CRUD ORMAWA
import TambahOrmawa from '../screens/crud/TambahOrmawa';
import ReadOrmawa from '../screens/crud/ReadOrmawa';
import UpdateOrmawa from '../screens/crud/UpdateOrmawa';
import DeleteOrmawa from '../screens/crud/DeleteOrmawa';

// 📄 screens CRUD UKM
import TambahUKM from '../screens/crud/TambahUKM';
import ReadUKM from '../screens/crud/ReadUKM';
import UpdateUKM from '../screens/crud/UpdateUKM';
import DeleteUKM from '../screens/crud/DeleteUKM';

// 📄 screens CRUD KEGIATAN
import TambahKegiatan from '../screens/crud/TambahKegiatan';
import ReadKegiatan from '../screens/crud/ReadKegiatan';
import UpdateKegiatan from '../screens/crud/UpdateKegiatan';
import DeleteKegiatan from '../screens/crud/DeleteKegiatan';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  const { user } = useContext(AuthContext);

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {/* ==================== BELUM LOGIN ==================== */}
      {!user ? (
        <>
          <Stack.Screen name="PublicHome" component={PublicHome} />
          <Stack.Screen name="About" component={About} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="ormawa" component={Ormawa} />
          <Stack.Screen name="ukm" component={Ukm} />
          <Stack.Screen name="acarakampus" component={AcaraKampus} />
        </>
      ) : user.role === 'admin' ? (
        <>
          {/* ==================== ADMIN ==================== */}
          <Stack.Screen name="AdminDashboard" component={AdminDashboard} />
          <Stack.Screen name="Profile" component={Profile} />

          {/* CRUD MAIN PAGE */}
          <Stack.Screen name="AdminOrmawaCRUD" component={AdminOrmawaCRUD} />
          <Stack.Screen name="AdminUKMCRUD" component={AdminUKMCRUD} />
          <Stack.Screen name="AdminKegiatanCRUD" component={AdminKegiatanCRUD} />

          {/* CRUD ORMAWA */}
          <Stack.Screen name="TambahOrmawa" component={TambahOrmawa} />
          <Stack.Screen name="ReadOrmawa" component={ReadOrmawa} />
          <Stack.Screen name="UpdateOrmawa" component={UpdateOrmawa} />
          <Stack.Screen name="DeleteOrmawa" component={DeleteOrmawa} />

          {/* CRUD UKM */}
          <Stack.Screen name="TambahUKM" component={TambahUKM} />
          <Stack.Screen name="ReadUKM" component={ReadUKM} />
          <Stack.Screen name="UpdateUKM" component={UpdateUKM} />
          <Stack.Screen name="DeleteUKM" component={DeleteUKM} />

          {/* CRUD KEGIATAN */}
          <Stack.Screen name="TambahKegiatan" component={TambahKegiatan} />
          <Stack.Screen name="ReadKegiatan" component={ReadKegiatan} />
          <Stack.Screen name="UpdateKegiatan" component={UpdateKegiatan} />
          <Stack.Screen name="DeleteKegiatan" component={DeleteKegiatan} />
        </>
      ) : (
        <>
          {/* ==================== USER ==================== */}
          <Stack.Screen name="UserDashboard" component={UserDashboard} />
          <Stack.Screen name="Profile" component={ProfileUser} />
          <Stack.Screen name="DetailKegiatan" component={DetailKegiatan} />
        </>
      )}
    </Stack.Navigator>
  );
}
