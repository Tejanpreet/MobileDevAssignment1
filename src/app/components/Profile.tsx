import { Pressable , Text, View, StyleSheet } from "react-native";

type ProfileStat = {
  profileName:string;
  label:string;
}

const ProfileStat = ({ profileName ,label } : ProfileStat) => {
 return (
    <View style={styles.stat}>
      <Text style={styles.statNum}>{profileName}</Text>
      <Text style={styles.statLabel}>{label}</Text>
    </View>
 );
};

const ProfileSection = () => {
return (
    <View style={styles.profile}>
      <View style={styles.topRow}>
        <View style={styles.avatarRing}>
          <View style={styles.avatar}>
            <Text style={styles.avatarText}>
              OO{'\n'}TD
            </Text>
          </View>
        </View>
        <ProfileStat profileName="53" label="Posts" />
        <ProfileStat profileName="12" label="Members" />
        <ProfileStat profileName="1" label="Admins" />
      </View>

      <Text style={styles.name}>OOTD Everyday</Text>
      <Text style={styles.bio}>{'Fit check! 👕\nYou know we\'ll hype you up.'}</Text>

      <Pressable style={styles.dropdown}>
        <Text style={styles.dropdownText}>Member &#8744;</Text>
      </Pressable>
    </View>
  );
};



export default ProfileSection;

const styles = StyleSheet.create({

profile: { paddingHorizontal: 16, paddingTop: 12 },

topRow: { flexDirection: 'row', alignItems: 'center' },

avatarRing: { width: 90, height: 90, borderRadius: 45, borderWidth: 3, borderColor: "#E1306C" , padding: 3 },

avatar: { flex: 1, borderRadius: 45, backgroundColor: "#1E88E5", justifyContent: 'center', alignItems: 'center' },

avatarText: { color: '#fff', fontSize: 20, fontWeight: '700', textAlign: 'center' },

stat: { flex: 1, alignItems: 'center' },

statNum: { fontSize: 16, fontWeight: '700', color: "#262626" },

statLabel: { fontSize: 13, color: "#262626" },

name: { marginTop: 10, fontWeight: '600', color: "#262626" },

bio: { marginTop: 2, color: "#262626", lineHeight: 18 },

dropdown: { marginTop: 12, height: 32, borderWidth: 1, borderColor: "#DBDBDB" , borderRadius: 6, justifyContent: 'center', alignItems: 'center' },

dropdownText: { fontWeight: '600', color: "#262626" },
});