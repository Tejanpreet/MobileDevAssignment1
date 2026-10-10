import { Dimensions , View ,  StyleSheet , Image } from "react-native";

const getPhotoUrl = (index: number): string  => {
  return `https://picsum.photos/seed/${index}/300`;
}

const SIZE = Dimensions.get('window').width / 3

const PhotoGrid = () => {

  const photos: string[] = [];

  for (let i = 0; i < 12; i++) 
    {
      photos.push(getPhotoUrl(i));
    };

return (
  <View style = {styles.grid}>
      {
        photos.map((uri) => (
          <Image key = {uri} source = {{uri}} style={styles.gridImg}/>
        ))
      } 
  </View>
  );
}

export default PhotoGrid;

const styles = StyleSheet.create({

  grid: { flexDirection: 'row', 
          flexWrap: 'wrap', 
          marginTop: 16 },

gridImg: { width: SIZE, 
           height: SIZE,
           borderWidth: 1, 
           borderColor: '#FFFFFF' },

});