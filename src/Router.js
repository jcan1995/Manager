import React from 'react';
import { Button } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';

const Router = createStackNavigator({
  login: {
    screen: LoginForm,
    navigationOptions: ({ navigation }) => ({
      title: 'Please Login',
    }),
  },
  employeeList: {
    screen: EmployeeList,
    navigationOptions: ({ navigation }) => ({
      title: 'Employees',
      headerLeft: null,
      headerRight: <Button title="Add" onPress={()=>{navigation.navigate('employeeCreate')}}/>
    })
  },
  employeeCreate: {
    screen: EmployeeCreate,
    navigationOptions: ({ navigation }) => ({
      title: 'Create Employee',
    })
  }
}, {
  initialRouteName: 'login'
});

export default Router;
