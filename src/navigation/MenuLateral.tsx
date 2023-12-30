
import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView } from '@react-navigation/drawer';
import { StackNavigation } from './StackNavigation';
import { SettingsScreen } from '../screens/SettingsScreen';
import { useWindowDimensions, Text, View, Image } from 'react-native';
import { styles } from '../theme/appTheme';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Drawer = createDrawerNavigator();

export const  MenuLateral =() => {
    
    const {width} = useWindowDimensions();

    return (

        <Drawer.Navigator
        // drawerType={width >= 768 ? 'permanent': 'front'}
        drawerContent={(props)=> <MenuInterno {...props}/>}
        >
        <Drawer.Screen name="StackNavigator"  component={StackNavigation} />
        <Drawer.Screen name="SettingsScreen"  component={SettingsScreen} />
        </Drawer.Navigator>
    );
}

const MenuInterno =( {navigation}: DrawerContentComponentProps) => {
    return (
        <DrawerContentScrollView>

            {/* {Parte del Avatar} */}
            <View style = {styles.avatarContainer}>
                <Image
                source={{
                    uri: ''

                }}
                style = {styles.avatar}
                />
            </View>

            {/* Opciones de menu */}

            <View style={styles.menuContainer}>
                <TouchableOpacity 
                style= {styles.menuBoton}
                onPress={ () =>  navigation.navigate('StackNavigation')}>
                    <Text style={styles.menuText}>Navegacion</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                style= { styles.menuBoton}
                onPress={ () => navigation.navigate('SettingsScreen')}
                >
                    <Text style={styles.menuText}>Ajustes</Text>
                </TouchableOpacity>
            </View>
        </DrawerContentScrollView>
    )
}