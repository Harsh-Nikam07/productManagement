import React from 'react';
import { createDrawerNavigator, DrawerItemList } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './screens/HomeScreen';
import AddItem from './screens/AddItem';
import UpdateItem from './screens/UpdateItem';


const Drawer = createDrawerNavigator();

const Route = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName='Home'>
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="addItem" component={AddItem} />
        <Drawer.Screen name="UpdateItem" component={UpdateItem} options={{drawerItemStyle: { display: 'none' }}} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default Route;
