import * as React from 'react';
import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import CheckBox from 'react-native-check-box';

function Quiz({navigation}) {
  const [text, onChangeText] = React.useState();
  const [selected, setSelected] = React.useState(false);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.flex}>
        <Text style={styles.heading}>Question :</Text>
        <Text style={styles.text}>
          Which among the following example is a right combination?
        </Text>
      </View>
      <CheckBox
        style={styles.checkbox}
        onClick={() => {
          setSelected(true);
        }}
        // isChecked={setSelected}
        rightText={'CheckBox'}
      />
      <CheckBox
        style={styles.checkbox}
        onClick={() => {
          setSelected(true);
        }}
        // isChecked={setSelected}
        rightText={'CheckBox'}
      />
      <CheckBox
        style={styles.checkbox}
        onClick={() => {
          setSelected(true);
        }}
        // isChecked={setSelected}
        rightText={'CheckBox'}
      />
      <View>
        <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
        />
      </View>
      <View style={styles.btn}>
        <Button title="Submit" onPress={() => navigation.navigate('Details')} />
      </View>
    </SafeAreaView>
  );
}

export default Quiz;

const styles = StyleSheet.create({
  container: {
    flex: 0.3,
    margin: 10,
    backgroundColor: '#f5f5f5',
  },
  flex: {
    display: 'flex',
  },
  heading: {
    fontSize: 16,
    fontWeight: 'bold',
    letterSpacing: 0.5,
  },
  text: {
    fontSize: 18,
    marginTop: 10,
    fontWeight: 'bold',
    letterSpacing: 0.5,
  },
  input: {
    height: 40,
    width: 350,
    borderWidth: 1,
    marginTop: 20,
  },
  btn: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  checkbox: {
    marginTop: 15,
  },
});
