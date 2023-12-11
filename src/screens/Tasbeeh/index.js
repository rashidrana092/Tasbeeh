import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  ImageBackground,
  Alert,
  StatusBar
} from 'react-native';
import React, {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Index() {
  

  useEffect(() => {
    getData();
  }, [])


  const [count, setCount] = useState(0);


  const getData = async () => {
    await AsyncStorage.getItem("countValue").then((value) => {
      if(value)
      
      {
        setCount(value);
      }
      else {
        setCount(0);
      }
      //console.warn("Get Value: ", value);
    
   });

    }

  const onCountClick = async() => {
    setCount(count + 1);
    await AsyncStorage.setItem('countValue', JSON.stringify(count+1));
    
    //const x = await AsyncStorage.getItem('countValue');
  // console.warn(x);
    
  };

  const onResetClick = async() => {
    setCount(0);
    await AsyncStorage.clear();
    //const x = await AsyncStorage.getItem('countValue');
   //console.warn(x);
    
  };

  return (
    <View style={styles.container}>
      <StatusBar
                barStyle={'default'}
                backgroundColor={'lightsteelblue'}
               // translucent = {true}
        />
        
      <ImageBackground
        source={require('../../assets/images/bg.png')}
        resizeMode="stretch"
        style={styles.imgStyle}>
        <Text style={styles.paragraph}>{count}</Text>
      </ImageBackground>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.countButton} onPress={onCountClick}>
          <Text style={{fontSize: 30, textAlign: 'center', color: 'white'}}>
            Count
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.resetButton} onPress={onResetClick}>
          <Text style={{fontSize: 30, textAlign: 'center'}}>
            Reset
            </Text>
        </TouchableOpacity>
      </View>
      <View style={styles.footer}>
    
        <Text style={{fontSize: 20, color: 'black', fontWeight: 'bold'}}>
          Developed by: Rana Rashid
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'lightsteelblue',
    padding: 8,
  },
  paragraph: {
    //margin: 24,
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingTop: '5%',
    //flex: 0.1,
    color: 'black',
    // borderWidth :1,
  },
  buttonContainer: {
    // borderWidth: 2,
    //  borderColor: 'red',
    height: '20%',
    alignItems: 'center',
    flexDirection: 'column-reverse',
    marginTop: '30%',
    justifyContent: 'flex-end',
  },
  countButton: {
    borderWidth: 1,
    borderColor: 'firebrick',
    borderRadius: 10,
    //flex: 1,
    width: '50%',
    height: '30%',
    backgroundColor: 'firebrick',
    //marginBottom: 20,
    // marginTop: '40%'
    margin: 5,
  },
  resetButton: {
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 10,
    width: '50%',
    height: '30%',
    // flex: 1,
    backgroundColor: 'white',
    margin: 10,
  },
  imgStyle: {
    width: '100%',
    // height: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    // borderWidth: 1,
    marginTop: 50,
    flex: 0.8,
    //    marginRight: 20
  },
  footer: {
    justifyContent: 'center',
    alignItems: 'center',
   // borderWidth:1,
    //flex:0.3,
    marginTop: 'auto',
    height: 'auto',
  },
});
