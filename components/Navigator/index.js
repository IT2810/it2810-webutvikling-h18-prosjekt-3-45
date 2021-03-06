import React from 'react';
import {
  createStackNavigator,
  createBottomTabNavigator,
} from 'react-navigation';
import { Icon } from 'expo';
import CalendarScreen from './CalendarScreen';
import TaskScreen from './TaskScreen';
import SettingsScreen from './SettingsScreen';

const COLOR = {
  focused: '#2f95dc',
  default: '#ccc',
};

const TaskStack = createStackNavigator({
  Task: TaskScreen,
});

TaskStack.navigationOptions = {
  tabBarLabel: TaskScreen.navigationOptions.title,
  tabBarIcon: ({ focused }) => (
    <Icon.Octicons
      name="tasklist"
      size={26}
      style={{ marginBottom: -3 }}
      color={focused ? COLOR.focused : COLOR.default}
    />
  ),
};

const CalendarStack = createStackNavigator({
  Calendar: CalendarScreen,
});

CalendarStack.navigationOptions = {
  tabBarLabel: CalendarScreen.navigationOptions.title,
  tabBarIcon: ({ focused }) => (
    <Icon.FontAwesome
      name="calendar"
      size={26}
      style={{ marginBottom: -3 }}
      color={focused ? COLOR.focused : COLOR.default}
    />
  ),
};

const SettingsStack = createStackNavigator({
  Settings: SettingsScreen,
});

SettingsStack.navigationOptions = {
  tabBarLabel: SettingsScreen.navigationOptions.title,
  tabBarIcon: ({ focused }) => (
    <Icon.Ionicons
      name="md-settings"
      size={26}
      style={{ marginBottom: -3 }}
      color={focused ? COLOR.focused : COLOR.default}
    />
  ),
};

export default createBottomTabNavigator(
  {
    TaskStack,
    CalendarStack,
    SettingsStack,
  },
  {
    initialRouteName: 'TaskStack',
    tabBarOptions: {
      activeTintColor: COLOR.focused,
      inactiveTintColor: COLOR.default,
    },
  },
);
