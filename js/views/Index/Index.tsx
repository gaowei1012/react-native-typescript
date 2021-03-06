import * as React from 'react';
import {View, SafeAreaView, Text, StyleSheet} from 'react-native';

interface IPorps {
  onPress: () => void;
}

interface IState {
  index: string;
}

class Index extends React.PureComponent<IPorps, IState> {
  public readonly state: Readonly<IState> = {
    index: 'hello',
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View>
          <Text>index page</Text>
        </View>
      </SafeAreaView>
    );
  }
}

export default Index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
