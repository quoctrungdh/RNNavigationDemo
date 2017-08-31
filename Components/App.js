import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';

import HomeScreen from './HomeScreen';
import ChatScreen from './ChatScreen';

function RecentChatsScreen({ navigation }) {
  return (
    <View>
      <Text>List of recent chats</Text>
      <Button
        onPress={() => navigation.navigate('Chat', { user: 'Lucy' })}
        title="Chat with Lucy"
      />
    </View>
  )
}

function AllContactsScreen({ navigation }) {
  return (
    <View>
      <Text>List of all contacts</Text>
      <Button
        onPress={() => navigation.navigate('Chat', { user: 'Lucy' })}
        title="Chat with Lucy"
      />
    </View>
  )
}

const MainScreenNavigator = TabNavigator({
  Recent: { screen: RecentChatsScreen },
  All: { screen: AllContactsScreen }
})

MainScreenNavigator.navigationOptions = {
  title: 'My chats',
  headerRight: <Button title="Info" />
}

const App = StackNavigator({
  Home: { screen: MainScreenNavigator },
  Chat: { screen: ChatScreen }
})

export default App;
