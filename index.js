/**
 * @format
 */

import {AppRegistry} from 'react-native';
import List from './src/components/ListItem';
import Main from './src/Main'
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Main);
