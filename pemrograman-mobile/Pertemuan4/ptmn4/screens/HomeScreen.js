import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <View>
          <Text style={styles.greeting}>Selamat Datang 👋</Text>
          <Text style={styles.name}>Mahasiswa</Text>
        </View>

        <Text style={styles.logo}>PBT</Text>
      </View>

      <View style={styles.banner}>
        <Text style={styles.bannerTitle}>
          Project Base Test
        </Text>

        <Text style={styles.bannerText}>
          Aplikasi untuk mengakses dan mengikuti
          ujian UTS dan UAS.
        </Text>
      </View>

      <Text style={styles.sectionTitle}>
        Menu Ujian
      </Text>

      <View style={styles.menuContainer}>

        <TouchableOpacity style={styles.menuCard}>
          <Text style={styles.menuIcon}>📝</Text>

          <Text style={styles.menuTitle}>
            UTS
          </Text>

          <Text style={styles.menuDescription}>
            Ujian Tengah Semester
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuCard}>
          <Text style={styles.menuIcon}>📚</Text>

          <Text style={styles.menuTitle}>
            UAS
          </Text>

          <Text style={styles.menuDescription}>
            Ujian Akhir Semester
          </Text>
        </TouchableOpacity>

      </View>

      <View style={styles.infoBox}>
        <Text style={styles.infoTitle}>
          💡 Informasi
        </Text>

        <Text style={styles.infoText}>
          Pastikan Anda sudah mempersiapkan diri
          sebelum memulai ujian.
        </Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc',
    padding: 20,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 25,
  },

  greeting: {
    fontSize: 14,
    color: '#64748b',
  },

  name: {
    fontSize: 22,
    fontWeight: '800',
    color: '#0f172a',
    marginTop: 3,
  },

  logo: {
    backgroundColor: '#0284c7',
    color: '#ffffff',
    fontWeight: '800',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 10,
  },

  banner: {
    backgroundColor: '#0284c7',
    borderRadius: 18,
    padding: 22,
    marginBottom: 25,
  },

  bannerTitle: {
    color: '#ffffff',
    fontSize: 22,
    fontWeight: '800',
    marginBottom: 8,
  },

  bannerText: {
    color: '#e0f2fe',
    fontSize: 14,
    lineHeight: 21,
  },

  sectionTitle: {
    fontSize: 19,
    fontWeight: '700',
    color: '#0f172a',
    marginBottom: 14,
  },

  menuContainer: {
    flexDirection: 'row',
    gap: 12,
  },

  menuCard: {
    flex: 1,
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 18,
    elevation: 2,
  },

  menuIcon: {
    fontSize: 32,
    marginBottom: 12,
  },

  menuTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#0f172a',
    marginBottom: 5,
  },

  menuDescription: {
    fontSize: 12,
    color: '#64748b',
    lineHeight: 18,
  },

  infoBox: {
    backgroundColor: '#e0f2fe',
    borderRadius: 15,
    padding: 17,
    marginTop: 20,
  },

  infoTitle: {
    fontSize: 15,
    fontWeight: '700',
    color: '#075985',
    marginBottom: 5,
  },

  infoText: {
    fontSize: 13,
    color: '#0369a1',
    lineHeight: 19,
  },
});