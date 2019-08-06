import { createAppContainer, createDrawerNavigator } from 'react-navigation';

import Index from './pages/Index';
import About from './pages/About';
import Calendar from './pages/Calendar';
import Donate from './pages/Donate';

const Routes = createAppContainer(
    createDrawerNavigator({
        'Ouvir rádio': Index,
        'Sobre': About,
        'Programação': Calendar,
        'Apoie': Donate
    },{
        hideStatusBar: true,
        drawerBackgroundColor: '#2e5775',
        drawerTintColor: '#ffffff',
        overlayColor: '#2e5775',
        contentOptions: {
          activeTintColor: '#2e5775',
          inactiveTintColor :'#ffffff',
          activeBackgroundColor: '#ffffff',
        },
      })
);

export default Routes;
