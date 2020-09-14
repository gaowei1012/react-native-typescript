import * as React from 'react';
import {View, SafeAreaView, Text, StyleSheet} from 'react-native';

interface IState {
  name: String;
}

class About extends React.PureComponent<{}, IState> {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View>
          <Text>about page</Text>
        </View>
      </SafeAreaView>
    );
  }
}

export default About;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
