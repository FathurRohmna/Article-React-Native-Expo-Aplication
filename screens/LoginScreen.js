import React, { useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { connect } from 'react-redux'

import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

import { AntDesign } from '@expo/vector-icons'

import AuthLayout from '../components/AuthLayout'
import TextButton from '../components/TextButton'
import { Controllers } from '../components/Controllers'
import { ErrorMessage } from '../components/ServerError'

import { authError } from '../selectors/authSelectors'
import { signinUser } from '../store/auth/redux-thunk'

import { FONTS, SIZES, COLORS } from '../commons/utilities'

const loginSchema = yup.object().shape({
  email: yup.string().required().email(),
  password: yup.string().required(),
})

const mapStateToProps = (state) => ({
  errorMessage: authError(state)
})

const actions = {
  sendData: signinUser
}

const LoginScreen = connect(mapStateToProps, actions)(({ navigation, sendData, errorMessage }) => {
  const { register, handleSubmit, formState: { errors }, setValue } = useForm({
    resolver: yupResolver(loginSchema)
  })

  const onSumbit = data => sendData(data)

  console.log(errorMessage);

  useEffect(() => {
    register('email')
    register('password')
  }, [])

  return (
    <AuthLayout>
      {errorMessage?.error_msg && <ErrorMessage errorMsg={errorMessage.error_msg} />}
      <Controllers.TextInput
        label="Your Email/Username"
        placeholder="Email Here"
        keyboardType="email-address"
        autoCompleteType="email"
        icon={<AntDesign name="user" size={14} color={COLORS.gray} />}
        errorMsg={errors.email ? errors.email.message : ''}
        onChange={(text) => setValue('email', text)}
      />
      <Controllers.TextInput
        label="Password"
        secureTextEntry={true}
        autoCompleteType="password"
        icon={<AntDesign name="lock" size={14} color={COLORS.gray} />}
        errorMsg={errors.password ? errors.password.message : ''}
        onChange={(text) => setValue('password', text)}
      />
      <TextButton
        label="Login"
        buttonContainerStyle={{
          height: 45,
          alignItems: 'center',
          marginTop: SIZES.padding,
          borderRadius: SIZES.radius,
          backgroundColor: COLORS.primary,
        }}
        labelStyle={{
          color: COLORS.white,
        }}
        onPress={handleSubmit(onSumbit)}
      />
      <View style={styles.labelContainer}>
        <Text
          style={{
            color: COLORS.gray,
            ...FONTS.body4
          }}
        >
          Are you a new User ? 
        </Text>
        <TextButton
          label="Sign up"
          buttonContainerStyle={{
            backgroundColor: 'transparent',
            height: 45,
            marginLeft: 4,
          }}
          labelStyle={{
            color: COLORS.primary
          }}
          onPress={() => navigation.navigate('auth_register')}
        />
      </View>
    </AuthLayout>
  );
})

export default LoginScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  labelContainer: {
    width: '100%',
    height: 45,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: SIZES.padding * 2
  }
});
