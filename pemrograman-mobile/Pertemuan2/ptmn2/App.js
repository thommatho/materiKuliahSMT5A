import React, { useState, useEffect, useRef } from 'react';
import { StatusBar } from 'expo-status-bar';

import {
  View,
  Text,
  ScrollView,
  FlatList,
  SectionList,
  TextInput,
  Button,
  TouchableOpacity,
  Pressable,
  Switch,
  Modal,
  ActivityIndicator,
  SafeAreaView,
  StyleSheet,
  Alert,
  Platform,
  KeyboardAvoidingView,
  Animated,
} from 'react-native';

// ============================================================
// DATA PROFIL
// ⚠️ GANTI SEMUA DATA DI BAWAH INI DENGAN DATA PRIBADI ANDA
// ============================================================

const PROFILE = {
  name: 'Tanu Hasyim',
  title: 'Mahasiswa Informatika',
  email: 'tunahisyam@gmail.com',
  phone: '082231044662',
  location: 'Cirebon, Jawa Barat',
  bio: 'Informatics student passionate about PHP web development and Python-based implementations. Continuously learning, building, and improving through real-world pro',
  avatar: require('./assets/avatar.jpg'),
};

// ============================================================
// DATA SKILLS
// ⚠️ GANTI NAMA & PERSENTASE SESUAI KEAHLIAN ANDA
// (Sudah berisi 3+ skill baru dengan warna berbeda sesuai tugas)
// ============================================================

const SKILLS = [
  { id: '1', name: 'Prompter', level: 90, color: '#7c3aed' },
  { id: '2', name: 'Web Development', level: 85, color: '#ec4899' },
  { id: '3', name: 'Python Programming', level: 80, color: '#f59e0b' },
  { id: '4', name: 'Graphic Design', level: 75, color: '#10b981' },
  { id: '5', name: 'Video Editing', level: 70, color: '#0ea5e9' },
  { id: '6', name: 'Writer', level: 65, color: '#f43f5e' },
];

// ============================================================
// DATA RIWAYAT (SECTIONS)
// ⚠️ GANTI ISI DENGAN PENGALAMAN & PENDIDIKAN ANDA
// (Sudah ditambahkan 1 pengalaman baru & 1 pendidikan baru — cari tanda ✨ BARU)
// ============================================================

const SECTIONS = [
  {
    title: '💼 Pengalaman / Proyek',
    data: [
      {
        id: 'e1',
        role: 'Web Developer',
        company: 'inkwell',
        period: '2026',
        desc: 'Memgembangkan website untuk media blog kepenulisan',
      },
      {
        id: 'e2',
        role: 'Web Developer',
        company: 'AI Finance Assistant',
        period: '2026',
        desc: 'Mengembangkan website untuk Personal Budgeting dengan integrasi AI',
      },
      {
        id: 'e3',
        role: 'Project Manager',
        company: 'FiNote',
        period: '2026',
        desc: 'Mengelola proyek pengembangan aplikasi keuangan pribadi',
      },
      {
        id: 'e4',
        role: 'Anggota Department of Religious and Social Affairs',
        company: 'Himpunan Mahasiswa Informatika (HIMAFOR)',
        period: '2026',
        desc: 'Anggota aktif di departemen keagamaan dan sosial, mengorganisir kegiatan sosial dan keagamaan untuk mahasiswa',
      },
      {
        id: 'e5',
        role: 'Anggota Department Education and Science Technology',
        company: 'Himpunan Mahasiswa Informatika (HIMAFOR)',
        period: '2026',
        desc: 'Anggota aktif di departemen pendidikan dan teknologi, berkontribusi dalam pengembangan program edukasi dan inovasi teknologi untuk mahasiswa',
      },
    ],
  },
  {
    title: '🎓 Pendidikan',
    data: [
      {
        id: 'd1',
        role: 'SLTA',
        company: 'Madrasah Aliyah Al-Anwar Paculgowang',
        period: '2021 - 2024',
        desc: 'Siswa di MA Al-Anwar Paculgowang, jurusan IPA',
      },
      {
        id: 'd2',
        role: 'Perguruan Tinggi',
        company: 'UIN Siber Syekh Nurjati Cirebon',
        period: '2024 - Sekarang',
        desc: 'Mahasiswa Informatika, fokus pada pengembangan web dan implementasi berbasis Python. Aktif dalam Organisasi Intra dan Ekstra',
      },
    ],
  },
];

// ============================================================
// DATA SOSIAL MEDIA
// ⚠️ GANTI DENGAN LINK SOSIAL MEDIA ANDA
// ============================================================

const SOCIAL = [
  { id: 's1', label: 'GitHub', icon: '💻', url: 'https://github.com/username-anda' },
  { id: 's2', label: 'LinkedIn', icon: '💼', url: 'https://linkedin.com/in/username-anda' },
  { id: 's3', label: 'Instagram', icon: '📷', url: 'https://instagram.com/username-anda' },
];

// ============================================================
// SUB-COMPONENT: SkillCard
// ============================================================

const SkillCard = ({ item }) => (
  <View style={styles.skillCard}>
    <View style={styles.skillHeader}>
      <View style={styles.skillNameRow}>
        <View style={[styles.skillDot, { backgroundColor: item.color }]} />
        <Text style={styles.skillName}>{item.name}</Text>
      </View>
      <Text style={[styles.skillPercent, { color: item.color }]}>{item.level}%</Text>
    </View>
    <View style={styles.progressBg}>
      <View
        style={[
          styles.progressFill,
          { width: `${item.level}%`, backgroundColor: item.color },
        ]}
      />
    </View>
  </View>
);

// ============================================================
// SUB-COMPONENT: TimelineCard
// ============================================================

const TimelineCard = ({ item, onPress }) => (
  <TouchableOpacity
    style={styles.timelineCard}
    onPress={() => onPress(item)}
    activeOpacity={0.7}
  >
    <View style={styles.timelineAccent} />

    <View style={styles.timelineContent}>
      <Text style={styles.timelineRole}>{item.role}</Text>
      <Text style={styles.timelineCompany}>{item.company}</Text>
      <Text style={styles.timelinePeriod}>{item.period}</Text>
      <Text style={styles.timelineHint}>Ketuk untuk detail →</Text>
    </View>
  </TouchableOpacity>
);

// ============================================================
// APP
// ============================================================

export default function App() {
  // ── STATE ──────────────────────────────────────

  const [openToWork, setOpenToWork] = useState(true);

  const [selectedItem, setSelectedItem] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const [senderName, setSenderName] = useState('');
  const [message, setMessage] = useState('');

  const [sending, setSending] = useState(false);

  const [pressing, setPressing] = useState(false);

  const [activeTab, setActiveTab] = useState('Info');

  // ── ANIMASI AVATAR ─────────────────────────────
  // Animated API: pulse (scale) + rotasi ring lembut

  const avatarScale = useRef(new Animated.Value(1)).current;
  const ringRotate = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(avatarScale, {
          toValue: 1.08,
          duration: 1100,
          useNativeDriver: true,
        }),
        Animated.timing(avatarScale, {
          toValue: 1,
          duration: 1100,
          useNativeDriver: true,
        }),
      ])
    ).start();

    Animated.loop(
      Animated.timing(ringRotate, {
        toValue: 1,
        duration: 6000,
        useNativeDriver: true,
      })
    ).start();
  }, []);

  const ringSpin = ringRotate.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  // ── HANDLER MODAL ──────────────────────────────

  const handleCardPress = (item) => {
    setSelectedItem(item);
    setModalVisible(true);
  };

  // ── HANDLER FORM KONTAK ────────────────────────

  const handleSend = () => {
    if (!senderName.trim() || !message.trim()) {
      Alert.alert('⚠️ Peringatan', 'Nama dan pesan tidak boleh kosong!');
      return;
    }

    setSending(true);

    setTimeout(() => {
      setSending(false);
      setSenderName('');
      setMessage('');

      Alert.alert('✅ Berhasil', `Pesan dari ${senderName} telah terkirim!`);
    }, 2000);
  };

  // ── RETURN ──────────────────────────────────────

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar style="dark" />

      {/* ================= HEADER ================= */}

      <View style={styles.headerBar}>
        <Text style={styles.headerTitle}>Curriculum Vitae</Text>

        <View style={styles.switchRow}>
          <Text style={styles.switchLabel}>
            {openToWork ? '🟢 Open' : '⚪ Busy'}
          </Text>

          <Switch
            value={openToWork}
            onValueChange={setOpenToWork}
            trackColor={{ false: '#e2e8f0', true: '#c4b5fd' }}
            thumbColor={openToWork ? '#7c3aed' : '#94a3b8'}
          />
        </View>
      </View>

      {/* ============= TAB NAVIGATION ============= */}

      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[styles.tabButton, activeTab === 'Info' && styles.activeTab]}
          onPress={() => setActiveTab('Info')}
          activeOpacity={0.8}
        >
          <Text style={styles.tabIcon}>👤</Text>
          <Text
            style={[
              styles.tabText,
              activeTab === 'Info' && styles.activeTabText,
            ]}
          >
            Info
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.tabButton,
            activeTab === 'Skills' && styles.activeTab,
          ]}
          onPress={() => setActiveTab('Skills')}
          activeOpacity={0.8}
        >
          <Text style={styles.tabIcon}>🛠️</Text>
          <Text
            style={[
              styles.tabText,
              activeTab === 'Skills' && styles.activeTabText,
            ]}
          >
            Skills
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.tabButton,
            activeTab === 'Kontak' && styles.activeTab,
          ]}
          onPress={() => setActiveTab('Kontak')}
          activeOpacity={0.8}
        >
          <Text style={styles.tabIcon}>✉️</Text>
          <Text
            style={[
              styles.tabText,
              activeTab === 'Kontak' && styles.activeTabText,
            ]}
          >
            Kontak
          </Text>
        </TouchableOpacity>
      </View>

      {/* ================= CONTENT ================= */}

      <ScrollView
        style={styles.scroll}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        {/* ---------------- TAB INFO ---------------- */}

        {activeTab === 'Info' && (
          <View style={styles.profileSection}>
            <View style={styles.avatarWrap}>
              <Animated.View
                style={[
                  styles.avatarRing,
                  { transform: [{ rotate: ringSpin }] },
                ]}
              />
              <Animated.Image
                source={PROFILE.avatar}
                style={[styles.avatar, { transform: [{ scale: avatarScale }] }]}
              />
            </View>

            {openToWork && (
              <View style={styles.badge}>
                <Text style={styles.badgeText}>✅ Open to Work</Text>
              </View>
            )}

            <Text style={styles.profileName}>{PROFILE.name}</Text>
            <Text style={styles.profileTitle}>{PROFILE.title}</Text>
            <Text style={styles.profileBio}>{PROFILE.bio}</Text>

            <View style={styles.contactRow}>
              <View style={styles.contactChip}>
                <Text style={styles.contactItem}>📧 {PROFILE.email}</Text>
              </View>
              <View style={styles.contactChip}>
                <Text style={styles.contactItem}>📍 {PROFILE.location}</Text>
              </View>
            </View>

            <View style={styles.contactChip}>
              <Text style={styles.contactItem}>📱 {PROFILE.phone}</Text>
            </View>

            <View style={styles.socialRow}>
              {SOCIAL.map((s) => (
                <TouchableOpacity
                  key={s.id}
                  style={styles.socialBtn}
                  onPress={() => Alert.alert('🔗 Link', s.url)}
                  activeOpacity={0.8}
                >
                  <Text style={styles.socialIcon}>{s.icon}</Text>
                  <Text style={styles.socialLabel}>{s.label}</Text>
                </TouchableOpacity>
              ))}
            </View>

            <Pressable
              style={({ pressed }) => [
                styles.downloadBtn,
                pressed && styles.downloadBtnPressed,
              ]}
              onPressIn={() => setPressing(true)}
              onPressOut={() => setPressing(false)}
              onPress={() =>
                Alert.alert('⬇️ Download', 'CV sedang diunduh...')
              }
            >
              <Text style={styles.downloadBtnText}>
                {pressing ? '⏳ Mengunduh...' : '⬇️  Download CV (PDF)'}
              </Text>
            </Pressable>
          </View>
        )}

        {/* ---------------- TAB SKILLS ---------------- */}

        {activeTab === 'Skills' && (
          <>
            <View style={styles.sectionBox}>
              <Text style={styles.sectionTitle}>🛠️ Keahlian</Text>
              <Text style={styles.sectionSubtitle}>
                Kemampuan yang sedang saya pelajari dan kembangkan
              </Text>

              <FlatList
                data={SKILLS}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <SkillCard item={item} />}
                scrollEnabled={false}
                ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
              />
            </View>

            <View style={styles.sectionBox}>
              <Text style={styles.sectionTitle}>📋 Riwayat</Text>
              <Text style={styles.sectionSubtitle}>
                Ketuk kartu untuk melihat detail
              </Text>

              <SectionList
                sections={SECTIONS}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                  <TimelineCard item={item} onPress={handleCardPress} />
                )}
                renderSectionHeader={({ section: { title } }) => (
                  <View style={styles.sectionHeader}>
                    <Text style={styles.sectionHeaderText}>{title}</Text>
                  </View>
                )}
                scrollEnabled={false}
                ItemSeparatorComponent={() => <View style={{ height: 10 }} />}
                SectionSeparatorComponent={() => (
                  <View style={{ height: 16 }} />
                )}
              />
            </View>
          </>
        )}

        {/* ---------------- TAB KONTAK ---------------- */}

        {activeTab === 'Kontak' && (
          <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          >
            <View style={styles.sectionBox}>
              <Text style={styles.sectionTitle}>✉️ Hubungi Saya</Text>
              <Text style={styles.sectionSubtitle}>
                Silakan kirim pesan melalui form berikut
              </Text>

              <TextInput
                style={styles.textInput}
                placeholder="Nama Anda"
                placeholderTextColor="#94a3b8"
                value={senderName}
                onChangeText={setSenderName}
                returnKeyType="next"
                editable={!sending}
              />

              <TextInput
                style={[styles.textInput, styles.textArea]}
                placeholder="Tulis pesan Anda di sini..."
                placeholderTextColor="#94a3b8"
                value={message}
                onChangeText={setMessage}
                multiline
                numberOfLines={4}
                textAlignVertical="top"
                editable={!sending}
              />

              {sending ? (
                <View style={styles.loadingRow}>
                  <ActivityIndicator size="large" color="#7c3aed" />
                  <Text style={styles.loadingText}>Mengirim pesan...</Text>
                </View>
              ) : (
                <Button
                  title="📨 Kirim Pesan"
                  color="#7c3aed"
                  onPress={handleSend}
                />
              )}
            </View>
          </KeyboardAvoidingView>
        )}

        <View style={{ height: 30 }} />
      </ScrollView>

      {/* ================= MODAL ================= */}

      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalBox}>
            {selectedItem && (
              <>
                <View style={styles.modalAccentBar} />
                <Text style={styles.modalTitle}>{selectedItem.role}</Text>
                <Text style={styles.modalCompany}>{selectedItem.company}</Text>
                <Text style={styles.modalPeriod}>
                  📅 {selectedItem.period}
                </Text>

                <View style={styles.modalDivider} />

                <Text style={styles.modalDesc}>{selectedItem.desc}</Text>
              </>
            )}

            <TouchableOpacity
              style={styles.modalCloseBtn}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.modalCloseBtnText}>✕ Tutup</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

// ============================================================
// PALET WARNA — Light & Minimalist, aksen violet-pink cerah
// ============================================================
const COLORS = {
  bg: '#ffffff',
  bgSoft: '#f8fafc',
  card: '#ffffff',
  border: '#e9ecf3',
  accent: '#7c3aed',
  accentSoft: '#ede9fe',
  accentPink: '#ec4899',
  accentOrange: '#f59e0b',
  text: '#1e293b',
  textMuted: '#64748b',
  textDim: '#94a3b8',
  success: '#059669',
  successBg: '#ecfdf5',
  white: '#ffffff',
};

// ============================================================
// STYLESHEET
// ============================================================

const styles = StyleSheet.create({
  // ── LAYOUT DASAR ───────────────────────────────
  safeArea: { flex: 1, backgroundColor: COLORS.bg },
  scroll: { flex: 1, backgroundColor: COLORS.bgSoft },

  // ── HEADER BAR ─────────────────────────────────
  headerBar: {
    backgroundColor: COLORS.white,
    paddingHorizontal: 20,
    paddingVertical: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: COLORS.border,
  },
  headerTitle: {
    color: COLORS.text,
    fontSize: 19,
    fontWeight: '800',
    letterSpacing: 0.2,
  },
  switchRow: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  switchLabel: { color: COLORS.textMuted, fontSize: 12, fontWeight: '600' },

  // ── TAB NAVIGATION ─────────────────────────────
  tabContainer: {
    flexDirection: 'row',
    backgroundColor: COLORS.white,
    marginHorizontal: 16,
    marginVertical: 14,
    borderRadius: 999,
    padding: 5,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  tabButton: {
    flex: 1,
    paddingVertical: 10,
    alignItems: 'center',
    borderRadius: 999,
  },
  activeTab: { backgroundColor: COLORS.accent },
  tabIcon: { fontSize: 15, marginBottom: 2 },
  tabText: { color: COLORS.textMuted, fontSize: 12, fontWeight: '600' },
  activeTabText: { color: COLORS.white, fontWeight: '700' },

  // ── SECTION PROFIL ─────────────────────────────
  profileSection: {
    alignItems: 'center',
    paddingVertical: 32,
    paddingHorizontal: 20,
    backgroundColor: COLORS.white,
    marginHorizontal: 16,
    marginBottom: 16,
    borderRadius: 24,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  avatarWrap: {
    width: 128,
    height: 128,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  avatarRing: {
    position: 'absolute',
    width: 128,
    height: 128,
    borderRadius: 64,
    borderWidth: 3,
    borderColor: COLORS.accent,
    borderStyle: 'dashed',
  },
  avatar: {
    width: 104,
    height: 104,
    borderRadius: 52,
    borderWidth: 3,
    borderColor: COLORS.white,
  },
  badge: {
    backgroundColor: COLORS.successBg,
    borderWidth: 1,
    borderColor: '#a7f3d0',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 20,
    marginBottom: 12,
  },
  badgeText: { color: COLORS.success, fontSize: 12, fontWeight: '700' },
  profileName: {
    color: COLORS.text,
    fontSize: 24,
    fontWeight: '800',
    textAlign: 'center',
  },
  profileTitle: {
    color: COLORS.accent,
    fontSize: 13,
    fontWeight: '700',
    marginTop: 4,
    marginBottom: 14,
    textAlign: 'center',
  },
  profileBio: {
    color: COLORS.textMuted,
    fontSize: 13,
    lineHeight: 20,
    textAlign: 'center',
    marginBottom: 16,
    paddingHorizontal: 8,
  },
  contactRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 8,
    marginBottom: 8,
  },
  contactChip: {
    backgroundColor: COLORS.bgSoft,
    borderRadius: 999,
    paddingHorizontal: 12,
    paddingVertical: 6,
    marginBottom: 4,
  },
  contactItem: {
    color: COLORS.textMuted,
    fontSize: 12,
    textAlign: 'center',
  },

  // ── SOSIAL MEDIA ───────────────────────────────
  socialRow: { flexDirection: 'row', gap: 12, marginTop: 16, marginBottom: 20 },
  socialBtn: {
    alignItems: 'center',
    backgroundColor: COLORS.accentSoft,
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 16,
  },
  socialIcon: { fontSize: 18, marginBottom: 4 },
  socialLabel: { color: COLORS.accent, fontSize: 11, fontWeight: '700' },

  // ── TOMBOL DOWNLOAD ────────────────────────────
  downloadBtn: {
    backgroundColor: COLORS.accent,
    paddingVertical: 14,
    paddingHorizontal: 36,
    borderRadius: 999,
  },
  downloadBtnPressed: { backgroundColor: '#6d28d9' },
  downloadBtnText: { color: COLORS.white, fontWeight: '700', fontSize: 14 },

  // ── SECTION BOX (wrapper kartu) ────────────────
  sectionBox: {
    marginHorizontal: 16,
    marginBottom: 16,
    backgroundColor: COLORS.white,
    borderRadius: 20,
    padding: 18,
    borderWidth: 1,
    borderColor: COLORS.border,
  },
  sectionTitle: {
    color: COLORS.text,
    fontSize: 16,
    fontWeight: '800',
    marginBottom: 4,
  },
  sectionSubtitle: {
    color: COLORS.textDim,
    fontSize: 11,
    marginBottom: 16,
  },

  // ── SECTION LIST HEADER ────────────────────────
  sectionHeader: {
    backgroundColor: COLORS.accentSoft,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 10,
    marginBottom: 8,
  },
  sectionHeaderText: {
    color: COLORS.accent,
    fontWeight: '700',
    fontSize: 13,
  },

  // ── SKILL CARD ─────────────────────────────────
  skillCard: {
    backgroundColor: COLORS.bgSoft,
    padding: 14,
    borderRadius: 14,
  },
  skillHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  skillNameRow: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  skillDot: { width: 8, height: 8, borderRadius: 4 },
  skillName: { color: COLORS.text, fontWeight: '600', fontSize: 13 },
  skillPercent: { fontWeight: '800', fontSize: 13 },
  progressBg: {
    height: 6,
    backgroundColor: COLORS.border,
    borderRadius: 4,
    overflow: 'hidden',
  },
  progressFill: { height: 6, borderRadius: 4 },

  // ── TIMELINE CARD ──────────────────────────────
  timelineCard: {
    flexDirection: 'row',
    backgroundColor: COLORS.bgSoft,
    borderRadius: 14,
    padding: 14,
    overflow: 'hidden',
  },
  timelineAccent: {
    width: 4,
    borderRadius: 2,
    backgroundColor: COLORS.accent,
    marginRight: 12,
  },
  timelineContent: { flex: 1 },
  timelineRole: {
    color: COLORS.text,
    fontWeight: '700',
    fontSize: 14,
    marginBottom: 2,
  },
  timelineCompany: { color: COLORS.accent, fontSize: 13, marginBottom: 2, fontWeight: '600' },
  timelinePeriod: { color: COLORS.textMuted, fontSize: 11, marginBottom: 6 },
  timelineHint: {
    color: COLORS.accentOrange,
    fontSize: 11,
    fontWeight: '600',
  },

  // ── TEXT INPUT ─────────────────────────────────
  textInput: {
    backgroundColor: COLORS.bgSoft,
    color: COLORS.text,
    borderWidth: 1,
    borderColor: COLORS.border,
    borderRadius: 14,
    paddingHorizontal: 14,
    paddingVertical: Platform.OS === 'ios' ? 14 : 10,
    fontSize: 14,
    marginBottom: 12,
  },
  textArea: { height: 100, textAlignVertical: 'top' },

  // ── LOADING ────────────────────────────────────
  loadingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 12,
    paddingVertical: 10,
  },
  loadingText: { color: COLORS.accent, fontSize: 14, fontWeight: '600' },

  // ── MODAL ──────────────────────────────────────
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(30,41,59,0.5)',
    justifyContent: 'flex-end',
  },
  modalBox: {
    backgroundColor: COLORS.white,
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    padding: 28,
  },
  modalAccentBar: {
    width: 40,
    height: 4,
    borderRadius: 2,
    backgroundColor: COLORS.border,
    alignSelf: 'center',
    marginBottom: 16,
  },
  modalTitle: {
    color: COLORS.text,
    fontSize: 20,
    fontWeight: '800',
    marginBottom: 4,
  },
  modalCompany: {
    color: COLORS.accent,
    fontSize: 15,
    fontWeight: '700',
    marginBottom: 4,
  },
  modalPeriod: { color: COLORS.textMuted, fontSize: 13, marginBottom: 16 },
  modalDivider: {
    height: 1,
    backgroundColor: COLORS.border,
    marginBottom: 16,
  },
  modalDesc: {
    color: COLORS.text,
    fontSize: 14,
    lineHeight: 22,
    marginBottom: 24,
  },
  modalCloseBtn: {
    backgroundColor: COLORS.accentSoft,
    borderRadius: 999,
    paddingVertical: 14,
    alignItems: 'center',
  },
  modalCloseBtnText: { color: COLORS.accent, fontWeight: '700', fontSize: 14 },
});