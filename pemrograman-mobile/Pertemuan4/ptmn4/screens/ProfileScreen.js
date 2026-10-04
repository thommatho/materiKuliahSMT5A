import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

export default function ProfileScreen() {
  return (
    <View style={styles.container}>

      <View style={styles.profileHeader}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>
            M
          </Text>
        </View>

        <Text style={styles.name}>
          Mahasiswa
        </Text>

        <Text style={styles.email}>
          mahasiswa@example.com
        </Text>
      </View>

      <View style={styles.card}>

        <Text style={styles.cardTitle}>
          Informasi Peserta
        </Text>

        <View style={styles.row}>
          <Text style={styles.label}>Nama</Text>
          <Text style={styles.value}>Tanu Hasyim</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>NIM</Text>
          <Text style={styles.value}>2488010011</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Program Studi</Text>
          <Text style={styles.value}>Informatika</Text>
        </View>

        <View style={styles.row}>
          <Text style={styles.label}>Status</Text>
          <Text style={styles.status}>Peserta Aktif</Text>
        </View>

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

  profileHeader: {
    alignItems: 'center',
    marginTop: 25,
    marginBottom: 25,
  },

  avatar: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: '#0284c7',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },

  avatarText: {
    color: '#ffffff',
    fontSize: 35,
    fontWeight: '800',
  },

  name: {
    fontSize: 23,
    fontWeight: '800',
    color: '#0f172a',
  },

  email: {
    color: '#64748b',
    marginTop: 5,
  },

  card: {
    backgroundColor: '#ffffff',
    borderRadius: 18,
    padding: 20,
    elevation: 2,
  },

  cardTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#0f172a',
    marginBottom: 18,
  },

  row: {
    paddingVertical: 14,
    borderBottomWidth: 1,
    borderBottomColor: '#e2e8f0',
  },

  label: {
    fontSize: 12,
    color: '#64748b',
    marginBottom: 4,
  },

  value: {
    fontSize: 15,
    fontWeight: '600',
    color: '#0f172a',
  },

  status: {
    fontSize: 15,
    fontWeight: '600',
    color: '#16a34a',
  },
});