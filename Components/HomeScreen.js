import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button
} from 'react-native';

class HomeScreen extends Component {
  static navigationOptions = {
    title: 'Welcome'
  }

  handleNavigate = () => {
    const { navigate } = this.props.navigation;
    navigate('Chat', { user: 'RN' });
  }

  render() {
    return (
      <View>
        <Text>Home Screen</Text>
        <Button
          onPress={this.handleNavigate}
          title="Let's chat"
        />
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

export default HomeScreen;
