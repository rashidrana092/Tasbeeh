import {StyleSheet} from 'react-native';

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'lightsteelblue',
    padding: 8,
  },

  counterText: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  buttonContainer: {
    // borderWidth: 1,
    //  borderColor: 'red',
    //  flexDirection: 'column-reverse',
    height: '20%',
    alignItems: 'center',
    justifyContent: 'flex-start',
    // backgroundColor: 'red',
    marginTop: 100,
  },

  imgStyle: {
    width: '100%',
    justifyContent: 'center',
    //   borderWidth: 1,
    alignItems: 'center',
    //  marginTop: 100,
    height: '100%',

    // alignSelf: 'center',
  },
  footer: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    //  borderWidth: 1,
    height: '10%',
    marginTop: 50,
  },
  curvedView: {
    width: 200,
    height: 200,
    backgroundColor: '#fff',
    //borderRadius: 100, // This will create a circular shape
    // You can also use a specific value for each corner
    //borderRadius: 20, // for a subtle curve
    borderRadius: {
      topLeft: 120,
      topRight: 20,
      bottomLeft: 20,
      bottomRight: 20,
    },
  },
});
