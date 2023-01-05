import React from 'react';
import {Dimensions, StyleSheet, Text, TouchableOpacity} from 'react-native';

const screen = Dimensions.get('window');
const buttonWith = screen.width / 4;

const styles = StyleSheet.create({
  text: {
    color: '#fff',
    fontSize: 25,
  },
  textSecondary: {
    color: '#060606',
  },
  button: {
    backgroundColor: '#333333',
    flex: 1,
    height: Math.floor(buttonWith - 10),
    alignItems: "center",
    justifyContent: "center",
    borderRadius: Math.floor(buttonWith),
    margin: 5,
  },
  buttonDouble: {
    width: screen.width / 2 - 10,
    paddingLeft: 40,
    flex: 0,
    alignItems: 'flex-start',
  },
  buttonSecondary: {
    backgroundColor: '#a6a6a6',
  },
  buttonAccent: {
    backgroundColor: '#f09a36',
  },
});

export default ({onPress, text, size, theme}) => {
  const buttonStyles = styles.button;
  const textStyles = styles.text;

  if (size === 'double') {
    buttonStyles.push(styles.buttonDouble);
  }
  if (theme === 'secondary') {
    buttonStyles.push(styles.buttonSecondary);
    textStyles.push(styles.textSecondary);
  } else if (theme === 'accent') {
    buttonStyles.push(styles.buttonAccent);
  }

  return (
    <TouchableOpacity onPress={onPress} style={buttonStyles}>
      <Text style={textStyles}>{text}</Text>
    </TouchableOpacity>
  );
};
