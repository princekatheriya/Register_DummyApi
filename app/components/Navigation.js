import React from 'react'
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
// import { createDrawerNavigator } from 'react-navigation-drawer'
// import { createStackNavigator } from 'react-navigation-stack'
import EnterDetails from './EnterDetails';
import SignUpForm from './SignUpForm';
import DummyApiCalls from './DummyApiCalls'

const InitialNavigator = createSwitchNavigator({
    Signup: SignUpForm,
    Details: EnterDetails,
    Dummyapi:DummyApiCalls
  }, {
    initialRouteName: 'Signup',
  });
export default createAppContainer(
    createSwitchNavigator(
      {
        App: InitialNavigator,
      },
      {
        initialRouteName: 'App'
      }
    )
  )