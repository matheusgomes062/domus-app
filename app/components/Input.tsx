import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const Input = ({
  placeholder = '',
  isPassword = false,
  style = {},
  onChangeText,
  onFocus = () => {},
  value
}) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  return (
    <View style={[styles.container, style]}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        secureTextEntry={isPassword && !isPasswordVisible}
        value={value}
        onChangeText={onChangeText}
        onFocus={onFocus}
        // selectionColor={'black'}
      />
      {isPassword && (
        <TouchableOpacity
          style={styles.togglePasswordButton}
          onPress={togglePasswordVisibility}
        >
          <FontAwesome
            name={isPasswordVisible ? 'eye-slash' : 'eye'}
            size={20}
            color="gray"
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    // borderWidth: 1,
    // borderColor: 'gray',
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  input: {
    flex: 1,
    height: 40,
  },
  togglePasswordButton: {
    padding: 10,
  },
});

export default Input;