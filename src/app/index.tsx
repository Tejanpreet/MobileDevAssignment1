import {  ScrollView ,Text, View, StyleSheet } from "react-native";
import Header from "./components/Header";
import ProfileSection from "./components/Profile";
import PhotoGrid from "./components/PhotoGrid";
import TabBar from "./components/TabBar";

const Index = () => {
 return(
  <ScrollView style={styles.screen}>
      <Header/>
      <ProfileSection/>
      <PhotoGrid/>
      <TabBar/>
  </ScrollView>
 ); 
};

export default Index;

const styles = StyleSheet.create({
 screen : {
    flex: 1,
    backgroundColor: '#FFFFFF',
  } ,


  }
);
 
