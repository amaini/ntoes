import React, { Component } from 'react';
import { TextInput } from 'react-native';

class Label extends Component {
  constructor(props) {
  super(props)
  this.state = { text: '' };
}
  render() {
    return (
      <TextInput
      style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
      onChangeText={(text) => this.setState({ text })}
      clearButtonMode='always'
      keyboardAppearance='dark'
      value={this.state.text}
      />
    );
  }
}

export default Label;
