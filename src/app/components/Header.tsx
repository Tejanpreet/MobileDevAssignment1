import { Text, View, StyleSheet } from "react-native";
import { Ionicons } from '@expo/vector-icons';

const Header = () => {
    return (
    <View style={styles.header}>
      <Ionicons name="chevron-back" size={26} color="#262626" />
      <View style={styles.headerCenter}>
        <Text style={styles.headerTitle}>Group Profile</Text>
        <Text style={styles.headerSub}>ootd_everyday</Text>
      </View>
      <Ionicons name="add-circle-outline" size={26} color="#262626" />
    </View>
  );
}

export default Header;

const styles = StyleSheet.create({

header: { flexDirection: 'row',
          justifyContent: 'space-between', 
          alignItems: 'center', 
          height: 56, 
          paddingHorizontal: 16 },

headerCenter: { alignItems: 'center' },

headerTitle: { fontSize: 16, 
               fontWeight: '600', 
               color: "#262626" },

              
headerSub: { fontSize: 12, 
             color: "#8E8E8E" },



});
