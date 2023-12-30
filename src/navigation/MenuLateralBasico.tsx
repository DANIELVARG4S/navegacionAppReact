import { createDrawerNavigator } from '@react-navigation/drawer';
import { StackNavigation } from './StackNavigation';
import { SettingsScreen } from '../screens/SettingsScreen';
import { useWindowDimensions } from 'react-native';

const Drawer = createDrawerNavigator();

export const  MenuLateralBasico =() => {
    
    const {width} = useWindowDimensions();

    return (

        <Drawer.Navigator
        // drawerType={width >= 768 ? 'permanent': 'front'}
        >
        <Drawer.Screen name="StackNavigator" options={{title:'Home'}} component={StackNavigation} />
        <Drawer.Screen name="SettingsScreen" options={{title:'Settings'}} component={SettingsScreen} />
        </Drawer.Navigator>
    );
}