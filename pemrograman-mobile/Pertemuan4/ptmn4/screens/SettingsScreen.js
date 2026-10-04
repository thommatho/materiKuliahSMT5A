import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function SettingsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>⚙️ Pengaturan</Text>

      <Text style={styles.item}>
        Notifikasi: Aktif
      </Text>

      <Text style={styles.item}>
        Tema: Default
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 25,
  },

  item: {
    fontSize: 17,
    marginBottom: 15,
  },
});