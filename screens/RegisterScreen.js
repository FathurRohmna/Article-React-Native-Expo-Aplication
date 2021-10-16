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
import { signupUser } from '../store/auth/redux-thunk'

import { FONTS, SIZES, COLORS } from '../commons/utilities'

const registerSchema = yup.object().shape({
  fullName: yup.string().required(),
  email: yup.string().required().email(),
  password: yup.string().required(),
})

const mapStateToProps = (state) => ({
  errorMessage: authError(state)
})

const actions = {
  sendData: signupUser
}

const RegisterScreen = connect(mapStateToProps, actions)(({ navigation, sendData, errorMessage }) => {
  const { register, handleSubmit, formState: { errors }, setValue } = useForm({
    resolver: yupResolver(registerSchema)
  })

  useEffect(() => {
    register('fullName')
    register('email')
    register('password')
  }, [])

  const onSumbit = data => sendData(data)

  return (
    <AuthLayout>
      {errorMessage?.error_msg && <ErrorMessage errorMsg={errorMessage.error_msg} />}
      <Controllers.TextInput
        label="Full Name"
        placeholder="Full Name Here"
        autoCompleteType="email"
        icon={<AntDesign name="user" size={14} color={COLORS.gray} />}
        errorMsg={errors.fullName ? errors.fullName.message : ''}
        onChange={(text) => setValue('fullName', text)}
      />
      <Controllers.TextInput
        label="Your Email"
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
        label="Register"
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
          Already a User ? 
        </Text>
        <TextButton
          label="Login"
          buttonContainerStyle={{
            backgroundColor: 'transparent',
            height: 45,
            marginLeft: 4,
          }}
          labelStyle={{
            color: COLORS.primary
          }}
          onPress={() => navigation.navigate('auth_login')}
        />
      </View>
    </AuthLayout>
  );
})

export default RegisterScreen

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
