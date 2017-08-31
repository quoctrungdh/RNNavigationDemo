import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

class ChatSreen extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
      title: `Chat with ${navigation.state.params.user}`
    }
  }

  render() {
    const { navigation } = this.props;
    return (
      <View>
        <Text>{`${navigation.state.params.user} Chat Screen`}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default ChatSreen;
