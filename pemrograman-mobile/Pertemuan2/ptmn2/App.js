import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      <View style={styles.card}>

        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.icon}>👨‍💻</Text>

          <Text style={styles.title}>
            PROFIL CALON PEMIMPIN
          </Text>

          <Text style={styles.subtitle}>
            Generasi Digital Indonesia
          </Text>
        </View>

        {/* Nama */}
        <View style={styles.profile}>
          <Text style={styles.name}>
            Tanu Hasyim
          </Text>

          <View style={styles.badge}>
            <Text style={styles.badgeText}>
              🚀 Future Leader
            </Text>
          </View>
        </View>

        {/* Biodata */}
        <View style={styles.infoBox}>
          <View style={styles.infoRow}>
            <Text style={styles.label}>NIM</Text>
            <Text style={styles.value}>2488010011</Text>
          </View>

          <View style={styles.divider} />

          <View style={styles.infoRow}>
            <Text style={styles.label}>Asal Sekolah</Text>
            <Text style={styles.value}>
              MA Al Anwar Paculgoang
            </Text>
          </View>
        </View>

        {/* Cita-cita */}
        <View style={styles.dreamBox}>
          <Text style={styles.dreamTitle}>
            🎯 CITA-CITA
          </Text>

          <Text style={styles.dream}>
            Menteri Komunikasi dan Digital
          </Text>
        </View>

        {/* Rencana */}
        <View style={styles.planBox}>
          <Text style={styles.planTitle}>
            💡 RENCANA MENCAPAI CITA-CITA
          </Text>

          <Text style={styles.plan}>
            “Belajar dengan giat, terus mengembangkan
            kemampuan, serta selalu berdoa.”
          </Text>
        </View>

        {/* Footer */}
        <Text style={styles.footer}>
          Belajar • Berkarya • Berdampak
        </Text>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0F172A',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },

  card: {
    width: '100%',
    maxWidth: 420,
    backgroundColor: '#FFFFFF',
    borderRadius: 25,
    overflow: 'hidden',
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.25,
    shadowRadius: 10,
  },

  header: {
    backgroundColor: '#1D4ED8',
    alignItems: 'center',
    paddingVertical: 28,
    paddingHorizontal: 20,
  },

  icon: {
    fontSize: 50,
    marginBottom: 10,
  },

  title: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
    letterSpacing: 1,
    textAlign: 'center',
  },

  subtitle: {
    color: '#DBEAFE',
    fontSize: 14,
    marginTop: 6,
  },

  profile: {
    alignItems: 'center',
    paddingVertical: 22,
  },

  name: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#0F172A',
  },

  badge: {
    backgroundColor: '#DBEAFE',
    paddingHorizontal: 15,
    paddingVertical: 7,
    borderRadius: 20,
    marginTop: 8,
  },

  badgeText: {
    color: '#1D4ED8',
    fontWeight: 'bold',
    fontSize: 13,
  },

  infoBox: {
    marginHorizontal: 20,
    padding: 16,
    backgroundColor: '#F8FAFC',
    borderRadius: 15,
  },

  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
  },

  label: {
    color: '#64748B',
    fontSize: 14,
    fontWeight: '600',
  },

  value: {
    color: '#0F172A',
    fontSize: 14,
    fontWeight: 'bold',
    maxWidth: '60%',
    textAlign: 'right',
  },

  divider: {
    height: 1,
    backgroundColor: '#E2E8F0',
  },

  dreamBox: {
    margin: 20,
    marginBottom: 10,
    padding: 18,
    backgroundColor: '#EFF6FF',
    borderRadius: 15,
    borderLeftWidth: 5,
    borderLeftColor: '#2563EB',
  },

  dreamTitle: {
    color: '#2563EB',
    fontSize: 13,
    fontWeight: 'bold',
    marginBottom: 6,
  },

  dream: {
    color: '#0F172A',
    fontSize: 19,
    fontWeight: 'bold',
  },

  planBox: {
    marginHorizontal: 20,
    padding: 18,
    backgroundColor: '#F8FAFC',
    borderRadius: 15,
  },

  planTitle: {
    color: '#334155',
    fontSize: 13,
    fontWeight: 'bold',
    marginBottom: 8,
  },

  plan: {
    color: '#475569',
    fontSize: 14,
    lineHeight: 22,
    fontStyle: 'italic',
  },

  footer: {
    textAlign: 'center',
    color: '#94A3B8',
    fontSize: 12,
    fontWeight: 'bold',
    marginVertical: 20,
    letterSpacing: 1,
  },
});