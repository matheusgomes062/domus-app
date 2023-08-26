import React, { useState } from 'react';
import { View, TouchableWithoutFeedback, Keyboard, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import GenericButton from '../components/Button';
import Input from '../components/Input';
import { loginSchema } from '../validation/ValidationSchema';

export default function RecoverPassword() {
  const navigation = useNavigation();
  const { control, handleSubmit, formState: { errors }, trigger } = useForm({
    resolver: yupResolver(loginSchema),
    mode: 'onChange',
  });

  const [formValues, setFormValues] = useState({
    email: '',
  });

  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };

  const handleRecoverPassword = (data) => {
    console.log('Login', data);
  };

  const onFormChange = (data) => {
    setFormValues(data);
  };

  return (
    <TouchableWithoutFeedback onPress={dismissKeyboard}>
      <View style={styles.container}>
        <View style={styles.content}>
          <View style={styles.title}>
            <Text style={styles.titleText}>domus<View style={styles.titleDot} /></Text>
          </View>

          <Controller
            control={control}
            render={({ field: { onChange, value } }) => (
              <>
                <Input
                  placeholder={'E-mail'}
                  isPassword={false}
                  style={styles.input}
                  value={value}
                  onChangeText={(text) => {
                    onChange(text);
                    onFormChange({ ...formValues, email: text });
                  }}
                  error={errors.email && errors.email.message} 
                />
              </>
            )}
            name="email"
            defaultValue=""
          />

          <GenericButton text="Enviar" onPress={handleSubmit(handleRecoverPassword)} showArrow={true} style={styles.button} />
          
          <View style={styles.rectangleDetail} />

          <Text style={styles.forgotPasswordLink} onPress={() => navigation.navigate('Login')}>
            Voltar
          </Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  content: {
    width: '80%',
  },
  input: {
    backgroundColor: '#D9D9D9',
    marginTop: 16,
  },
  errorText: {
    color: 'red',
    marginTop: 4,
  },
  forgotPasswordLink: {
    alignSelf: 'center',
    color: '#062F54',
    textDecorationLine: 'underline',
    marginTop: 16,
  },
  title: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 14,
  },
  titleText: {
    color: 'black',
    fontSize: 36,
    fontWeight: '700',
  },
  titleDot: {
    width: 5,
    height: 5,
    backgroundColor: '#FFA500',
    marginLeft: 8,
  },
  button: {
    marginTop: 16,
  },
  rectangleDetail: {
    marginTop: 21,
    height: 2,
    backgroundColor: '#D9D9D9',
  }
});