import React, { useState } from 'react';
import { View, TouchableWithoutFeedback, Keyboard, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import GenericButton from '../components/Button';
import Input from '../components/Input';
import { loginSchema } from '../validation/ValidationSchema';
import AuthService from '../services/AuthService';
import { useDispatch } from 'react-redux';
import { setUserLogin } from '../store/actions/authActions';

export default function Login() {
  const navigation = useNavigation();

  const { control, handleSubmit, formState: { errors }, trigger } = useForm({
    resolver: yupResolver(loginSchema),
    mode: 'onChange',
  });

  const [formValues, setFormValues] = useState({
    email: '',
    password: '',
  });

  const dismissKeyboard = () => {
    Keyboard.dismiss();
  };

  const dispatch = useDispatch();

  const handleLogin = async (data) => {
    try {
      const token = await AuthService.login(data.email, data.password);

      token && dispatch(setUserLogin(token));

    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  const onFormChange = (data) => {
    setFormValues(data);
  };

  const isFormValid = loginSchema.isValidSync(formValues);

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

          <Controller
            control={control}
            render={({ field: { onChange, value } }) => (
              <>
                <Input
                  placeholder={'Senha'}
                  isPassword={true}
                  style={styles.input}
                  value={value}
                  onChangeText={(text) => {
                    onChange(text);
                    onFormChange({ ...formValues, password: text });
                  }}
                  error={errors.password && errors.password.message} 
                />
              </>
            )}
            name="password"
            defaultValue=""
          />

          <GenericButton text="Login" onPress={handleSubmit((data) => handleLogin(data))} showArrow={true} style={styles.button} />

          <View style={styles.rectangleDetail}/>

          <Text style={styles.forgotPasswordLink} onPress={() => navigation.navigate('RecoverPassword')}>
            Esqueceu sua senha?
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
    marginTop: 21,
  },
  rectangleDetail: {
    marginTop: 21,
    height: 2,
    backgroundColor: '#D9D9D9',
  }
});