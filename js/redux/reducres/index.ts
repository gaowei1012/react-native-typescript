import {combineReducers} from 'redux';
import theme from './theme/index';

const root = combineReducers({
  theme: theme,
});

export default root;
