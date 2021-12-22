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
    backgroundColor: '#f5f5f5',
  },
  text: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 50,
  },
  btn: {
    flex: 0.3,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
});
