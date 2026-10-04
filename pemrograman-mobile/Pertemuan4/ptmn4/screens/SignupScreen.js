import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';

export default function SignupScreen({ navigation }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignup = () => {
    // Untuk praktikum, setelah daftar kembali ke Login
    navigation.goBack();
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        keyboardShouldPersistTaps="handled"
      >
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.logo}>
            <Text style={styles.logoText}>PBT</Text>
          </View>

          <Text style={styles.title}>Buat Akun</Text>

          <Text style={styles.subtitle}>
            Daftar untuk mengikuti ujian
          </Text>
        </View>

        {/* Signup Card */}
        <View style={styles.card}>

          <Text style={styles.cardTitle}>
            Registrasi Peserta
          </Text>

          <Text style={styles.description}>
            Lengkapi data berikut untuk membuat akun baru.
          </Text>

          {/* Nama */}
          <Text style={styles.label}>Nama Lengkap</Text>

          <TextInput
            style={styles.input}
            placeholder="Masukkan nama lengkap"
            placeholderTextColor="#94a3b8"
            value={name}
            onChangeText={setName}
          />

          {/* Email */}
          <Text style={styles.label}>Email</Text>

          <TextInput
            style={styles.input}
            placeholder="Masukkan email"
            placeholderTextColor="#94a3b8"
            keyboardType="email-address"
            autoCapitalize="none"
            value={email}
            onChangeText={setEmail}
          />

          {/* Password */}
          <Text style={styles.label}>Password</Text>

          <TextInput
            style={styles.input}
            placeholder="Buat password"
            placeholderTextColor="#94a3b8"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />

          {/* Konfirmasi Password */}
          <Text style={styles.label}>Konfirmasi Password</Text>

          <TextInput
            style={styles.input}
            placeholder="Masukkan ulang password"
            placeholderTextColor="#94a3b8"
            secureTextEntry
            value={confirmPassword}
            onChangeText={setConfirmPassword}
          />

          {/* Register Button */}
          <TouchableOpacity
            style={styles.signupButton}
            onPress={handleSignup}
            activeOpacity={0.8}
          >
            <Text style={styles.signupButtonText}>
              Daftar
            </Text>
          </TouchableOpacity>

          {/* Back to Login */}
          <View style={styles.loginContainer}>
            <Text style={styles.loginText}>
              Sudah memiliki akun?
            </Text>

            <TouchableOpacity
              onPress={() => navigation.goBack()}
            >
              <Text style={styles.loginLink}>
                Kembali ke Login
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <Text style={styles.footer}>
          © 2026 Project Base Test
        </Text>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f5f9',
  },

  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 24,
  },

  header: {
    alignItems: 'center',
    marginBottom: 24,
  },

  logo: {
    width: 64,
    height: 64,
    borderRadius: 18,
    backgroundColor: '#0284c7',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 14,
  },

  logoText: {
    color: '#ffffff',
    fontSize: 19,
    fontWeight: '800',
  },

  title: {
    fontSize: 25,
    fontWeight: '800',
    color: '#0f172a',
  },

  subtitle: {
    fontSize: 14,
    color: '#64748b',
    marginTop: 5,
  },

  card: {
    backgroundColor: '#ffffff',
    borderRadius: 20,
    padding: 24,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.08,
    shadowRadius: 8,
  },

  cardTitle: {
    fontSize: 21,
    fontWeight: '700',
    color: '#0f172a',
    marginBottom: 7,
  },

  description: {
    fontSize: 14,
    color: '#64748b',
    lineHeight: 20,
    marginBottom: 22,
  },

  label: {
    fontSize: 14,
    fontWeight: '600',
    color: '#334155',
    marginBottom: 8,
  },

  input: {
    height: 50,
    borderWidth: 1,
    borderColor: '#cbd5e1',
    borderRadius: 12,
    paddingHorizontal: 15,
    fontSize: 15,
    color: '#0f172a',
    marginBottom: 15,
    backgroundColor: '#f8fafc',
  },

  signupButton: {
    height: 52,
    borderRadius: 12,
    backgroundColor: '#0284c7',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5,
  },

  signupButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '700',
  },

  loginContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },

  loginText: {
    color: '#64748b',
    fontSize: 14,
  },

  loginLink: {
    color: '#0284c7',
    fontSize: 14,
    fontWeight: '700',
    marginLeft: 5,
  },

  footer: {
    textAlign: 'center',
    color: '#94a3b8',
    fontSize: 12,
    marginTop: 22,
  },
});