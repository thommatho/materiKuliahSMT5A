import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function AboutScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>ℹ️ Tentang Aplikasi</Text>

      <Text style={styles.text}>
        Project Base Test adalah aplikasi mobile
        untuk mengakses ujian UTS dan UAS.
      </Text>

      <Text style={styles.version}>
        Versi 1.0.0
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 25,
  },

  title: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 20,
  },

  text: {
    textAlign: 'center',
    fontSize: 16,
    marginBottom: 20,
  },

  version: {
    color: '#64748b',
  },
});