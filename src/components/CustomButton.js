import {TouchableOpacity, StyleSheet, Text} from 'react-native';

export default CustomButton = ({
  text = '',
  onPress = () => {},
  btnStyle = {},
  textStyle = {},
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={{...styles.btnStyle, ...btnStyle}}
      onPress={onPress}>
      <Text style={{...styles.textStyle, ...textStyle}}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btnStyle: {
    borderWidth: 1,
    borderColor: 'firebrick',
    borderRadius: 8,
    //flex: 1,
    width: '90%',
    height: '46%',
    backgroundColor: 'firebrick',
    //marginBottom: 20,
    // marginTop: '40%'
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 6,
  },
  textStyle: {
    fontSize: 30,
    textAlign: 'center',
    color: 'white',
    // textAlignVertical: 'center',
  },
});
