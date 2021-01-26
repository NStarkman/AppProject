import React, { Component } from 'react';
import {
  Text,
  StyleSheet,
  TextInput, 
  View,
  TouchableOpacity,
} from 'react-native';

class Main extends React.Component {
  state = { name: '' } 
  onPress = () => {
  this.props.navigation.navigate('Chat', { name: this.state.name });
}
  onChangeText = name => this.setState({ name }); // 1.

  render() {
    return (
      <View>
        <Text style={styles.title}>Enter your name:</Text> 
        <TextInput
          style={styles.nameInput}
          placeHolder="Bentzion Fiorino"
          onChangeText={this.onChangeText}
          value={this.state.name}
        />
         <TouchableOpacity onPress={this.onPress}>
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const offset = 24;
const styles = StyleSheet.create({
  nameInput: { 
    height: offset * 2,
    margin: offset,
    paddingHorizontal: offset,
    borderColor: '#000000',
    borderWidth: 1,
  },
});
export default Main;
