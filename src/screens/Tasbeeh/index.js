import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect, useState} from 'react';
import {ImageBackground, StatusBar, Text, View} from 'react-native';
import CustomButton from '../../components/CustomButton';
import styles from './styles';
import {heightPercentageToDP} from 'react-native-responsive-screen';

export default function Index() {
  useEffect(() => {
    getData();
  }, []);

  const [count, setCount] = useState(0);

  const getData = async () => {
    await AsyncStorage.getItem('countValue').then(value => {
      if (value) {
        setCount(value);
      } else {
        setCount(0);
      }
      //console.warn("Get Value: ", value);
    });
  };

  const onCountClick = async () => {
    setCount(count + 1);
    await AsyncStorage.setItem('countValue', JSON.stringify(count + 1));

    //const x = await AsyncStorage.getItem('countValue');
    // console.warn(x);
  };

  const onResetClick = async () => {
    setCount(0);
    await AsyncStorage.clear();
    //const x = await AsyncStorage.getItem('countValue');
    //console.warn(x);
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle={'default'} backgroundColor={'lightsteelblue'} />

      <View style={{height: '40%'}}>
        <ImageBackground
          source={require('../../assets/images/bg.png')}
          resizeMode="stretch"
          style={styles.imgStyle}>
          <Text style={styles.counterText}>{count}</Text>
        </ImageBackground>
      </View>

      <View style={styles.buttonContainer}>
        <CustomButton text="Count" onPress={onCountClick} />
        <CustomButton
          text="Reset"
          onPress={onResetClick}
          btnStyle={{
            // backgroundColor: 'transparent',
            backgroundColor: 'white',
            borderColor: 'white',
          }}
          textStyle={{color: 'grey'}}
        />
      </View>
      <View style={styles.footer}>
        <Text style={{fontSize: 20, color: 'black', fontWeight: 'bold'}}>
          Developed by: Muhammad Rashid
        </Text>
      </View>
    </View>
  );
}
