import React, { useEffect } from 'react'
import { Text, View } from 'react-native'
import { styles } from '../theme/appTheme'
import { StackScreenProps } from '@react-navigation/stack'
import { RootStackParams } from '../navigation/StackNavigation'

// interface RouterParams{
//     id: number;
//     nombre: string
// }


interface Props extends StackScreenProps<RootStackParams, 'PersonaScreen'>{};

export const PersonaScreen = ({route, navigation}: Props) => {

    // const params = route.params as RouterParams;
    const params = route.params;
    // console.log(JSON.stringify(props, null, 3));

    useEffect( ()=>{

        navigation.setOptions({
            title: params.nombre
        })
    },[])

    return (
        <View style={ styles.globalMargin}>
            <Text style={styles.title}>
                {
                    JSON.stringify(params, null, 3)
                }
            </Text>
        </View>
    )
}
