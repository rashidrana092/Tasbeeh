import { Pressable, StyleSheet, Text, View,Image } from 'react-native'
import styles from './styles';

const Home = () => {
  return (
    <View style={styles.container}>
        <Image
        source={require('../../assets/images/bg.png')}
        style={styles.img}
        resizeMode='center'
        />
         




    
    </View>
  )
}

export default Home;