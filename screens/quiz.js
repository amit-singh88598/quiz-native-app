import * as React from 'react';
import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import CheckBox from 'react-native-checkbox-animated';

import {RadioButton} from 'react-native-paper';

const data = [
  {
    label: 'one',
  },
  {
    label: 'two',
  },
  {
    label: 'three',
  },
  {
    label: 'four',
  },
];

function Quiz({navigation}) {
  const [text, onChangeText] = React.useState();
  const [checked, setChecked] = React.useState(false);

  const [value, setValue] = React.useState('first');

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.flex}>
        <Text style={styles.heading}>Question :</Text>
        <Text style={styles.text}>
          Which among the following example is a right combination?
        </Text>
      </View>
      <View>
        {/* {data.map((item, index) => (
          <CheckBox
            key={index}
            label={item.label}
            // onValueChange={val => setChecked(val)}
            onClick={() => setChecked(!checked)}
            checked={checked}
            checkboxContainerStyle={{padding: 10}}
          />
        ))} */}
        {/* <RadioButton
          title={'sikdhfi'}
          label={'The first option'}
          value={'first'}
          status={checked === 'first' ? 'checked' : 'unchecked'}
          onPress={() => setChecked('first')}
        /> */}
        {/* <RadioButton
          value="second"
          status={checked === 'second' ? 'checked' : 'unchecked'}
          onPress={() => setChecked('second')}
        /> */}
        <RadioButton.Group
          onValueChange={value => setValue(value)}
          value={value}>
          <RadioButton.Item label="First item" value="first" />
          <RadioButton.Item label="Second item" value="second" />
        </RadioButton.Group>
      </View>
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
