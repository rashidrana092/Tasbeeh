// in this file styles for Login Screen will be saved.
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';
import {StyleSheet} from 'react-native';

export default styles = StyleSheet.create({
    container: {
        flex: 1,
      },
      textStyle: {
        //alignItems: 'center',
       // marginVertical: hp(45)
       borderWidth: 2,
       borderColor: 'red'        
      },
      img: {
        width: wp(100),
        height: hp(80),
        borderWidth: 1,
        borderColor: 'red'

      },
      footer:{
        borderWidth: 1,
        height: hp(30),
        width: wp(20)
      }

})
