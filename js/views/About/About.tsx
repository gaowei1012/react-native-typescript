import * as React from 'react';
import {View, SafeAreaView, Text, StyleSheet} from 'react-native';

class About extends React.PureComponent {
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
