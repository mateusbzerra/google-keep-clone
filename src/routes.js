import { createAppContainer, createStackNavigator } from 'react-navigation';

import Home from './pages/Home/';
import Note from './pages/Note';

const routes = createAppContainer(createStackNavigator({ Home, Note }));

export default routes;
