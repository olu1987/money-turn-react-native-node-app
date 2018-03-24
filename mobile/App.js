import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { fetchAllSavingGroups } from './constants/api';

export default class App extends React.Component {
  static defaultProps = {
    fetchAllSavingGroups
  }

  async componentDidMount() {
    function getMoviesFromApiAsync(){
      return fetch('http://192.168.0.25:3000/api/saving-group')
        .then((response) => response.json())
        .then((responseJson) =>  {
          console.log(responseJson);
        })
        .catch((error) => {
          console.error(error);
        });
    }

    getMoviesFromApiAsync();
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Welcome to turnover app</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
