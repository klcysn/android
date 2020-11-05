import {StyleSheet, Dimensions} from 'react-native';

export const topicItem = StyleSheet.create({
  container: {
    padding: 80,
    margin: 7,
    borderRadius: 6,
    width : Dimensions.get("window").width * 0.8
  },
  text: {
    fontWeight: 'bold',
    color: 'white',
    fontSize : 36,
    textAlign : "center"
  },
});

export const jobItem = StyleSheet.create({
    container: {
      padding: 12,
      margin: 7,
      borderRadius: 6,
      borderWidth: 1,
      borderColor: '#bdbdbd',
      width : Dimensions.get("window").width * 0.785
    },
    jobname: {
      fontWeight: 'bold',
    },
  });

export const introduction = StyleSheet.create({
  banner: {
    height: Dimensions.get('window').height / 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bannerText: {
    fontSize: 25,
    fontWeight: 'bold',
  },
});

export const jobs = StyleSheet.create({
  modalBackground: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10
  },
  jobTitle: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  jobDesc: {
    padding: 5,
    overflow : "hidden",
    height : Dimensions.get("window").height * 0.3
  }
})