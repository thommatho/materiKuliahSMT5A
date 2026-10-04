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

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Untuk praktikum, login langsung diarahkan ke Main
    navigation.replace('Main');
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

          <Text style={styles.title}>Project Base Test</Text>

          <Text style={styles.subtitle}>
            Platform Ujian Mahasiswa
          </Text>
        </View>

        {/* Login Card */}
        <View style={styles.card}>
          <Text style={styles.welcome}>Selamat Datang 👋</Text>

          <Text style={styles.description}>
            Silakan masuk untuk mengakses ujian UTS dan UAS.
          </Text>

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
            placeholder="Masukkan password"
            placeholderTextColor="#94a3b8"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />

          {/* Login Button */}
          <TouchableOpacity
            style={styles.loginButton}
            onPress={handleLogin}
            activeOpacity={0.8}
          >
            <Text style={styles.loginButtonText}>
              Masuk
            </Text>
          </TouchableOpacity>

          {/* Register */}
          <View style={styles.registerContainer}>
            <Text style={styles.registerText}>
              Belum memiliki akun?
            </Text>

            <TouchableOpacity
              onPress={() => navigation.navigate('Signup')}
            >
              <Text style={styles.registerLink}>
                Daftar sekarang
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
    marginBottom: 28,
  },

  logo: {
    width: 76,
    height: 76,
    borderRadius: 22,
    backgroundColor: '#0284c7',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },

  logoText: {
    color: '#ffffff',
    fontSize: 22,
    fontWeight: '800',
  },

  title: {
    fontSize: 26,
    fontWeight: '800',
    color: '#0f172a',
  },

  subtitle: {
    fontSize: 14,
    color: '#64748b',
    marginTop: 6,
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

  welcome: {
    fontSize: 22,
    fontWeight: '700',
    color: '#0f172a',
    marginBottom: 8,
  },

  description: {
    fontSize: 14,
    color: '#64748b',
    lineHeight: 20,
    marginBottom: 24,
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
    marginBottom: 16,
    backgroundColor: '#f8fafc',
  },

  loginButton: {
    height: 52,
    borderRadius: 12,
    backgroundColor: '#0284c7',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 6,
  },

  loginButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '700',
  },

  registerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 22,
  },

  registerText: {
    color: '#64748b',
    fontSize: 14,
  },

  registerLink: {
    color: '#0284c7',
    fontSize: 14,
    fontWeight: '700',
    marginLeft: 5,
  },

  footer: {
    textAlign: 'center',
    color: '#94a3b8',
    fontSize: 12,
    marginTop: 24,
  },
});