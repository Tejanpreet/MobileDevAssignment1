import { StyleSheet, View } from "react-native";
import { Ionicons } from '@expo/vector-icons';

const TabBar = () => {
  const icons = ['home-outline', 'search-outline', 'play-circle-outline', 'bag-outline', 'person-circle'] as const;

  return (
    <View style = {styles.tabBar}>
      {icons.map((name) => 
      <Ionicons key={name}  name = {name}  size={26} color ="#262626"/>)}
    </View>
  );
};

export default TabBar;

const styles = StyleSheet.create({
  tabBar: {
  flexDirection: 'row',
  justifyContent: 'space-around',
  alignItems: 'center',
  height: 56,
  borderTopWidth: StyleSheet.hairlineWidth,
  borderColor:"#DBDBDB",
 },
});