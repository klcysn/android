import {Dimensions, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: Dimensions.get('window').height * 0.3,
    width: Dimensions.get('window').width * 0.8,
    borderRadius: 50,
  },
  buttonText: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
  },
  homeContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  randomCardContainer: {
    width: Dimensions.get('window').width * 0.55,
    height: Dimensions.get('window').height * 0.3,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  randomCardText: {
    fontSize: 25,
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  randomContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  randomArea: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  randomButtonContainer: {
    width: 80,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 40,
    marginTop: 10,
    margin: 10,
  },
  randomButtonWrapper: {
    flexDirection: 'row',
  },
  randomButtonText: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'white',
  },
  wordContainer: {
    backgroundColor: "#7f0000",
    padding: 10,
    margin: 3
  },
  wordText: {
    color: "white",
    fontSize: 25
  }
});

export default styles;
