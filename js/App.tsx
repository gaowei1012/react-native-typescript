import * as React from 'react';
import {Provider} from 'react-redux';
import store from './redux/store';
import Index from './views/Index/Index';

class App extends React.PureComponent {
  render() {
    return (
      <Provider store={store}>
        <Index />
      </Provider>
    );
  }
}

export default App;
