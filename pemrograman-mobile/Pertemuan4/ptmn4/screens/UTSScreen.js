import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function UTSScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>📝 Ujian Tengah Semester</Text>

      <Text style={styles.info}>
        Silakan mengerjakan soal UTS sesuai waktu yang ditentukan.
      </Text>

      <Button
        title="Mulai UTS"
        onPress={() => alert('UTS dimulai')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },

  info: {
    textAlign: 'center',
    marginBottom: 20,
    color: '#64748b',
  },
});