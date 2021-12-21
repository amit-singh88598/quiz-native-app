import * as React from 'react';
import {Button, SafeAreaView, StyleSheet, Text, View} from 'react-native';

function HomeScreen({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.text}>WELCOME TO QUIZ APP</Text>
      </View>
      <View style={styles.btn}>
        <Button
          title="Start Quiz"
          onPress={() => navigation.navigate('Details')}
        />
      </View>
    </SafeAreaView>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  text: {
    fontSize: 26,
    fontWeight: 'bold',
    padding: 20,
  },
  btn: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
});
