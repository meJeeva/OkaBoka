import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'tamagui';

const SplashScreen = ({
    navigation
}) => {

    useEffect(() => {
        navigation.navigate('SignUp')
    }, [navigation]);

    return (
        <View style={{
            flexDirection: 'row',
            alignItems: 'center',
            flex: 1,
            justifyContent: 'center'
        }}>
            <Button onPress={() => {
                navigation.navigate('SignUp')
            }}>
                <Text>SplashScreen</Text>
            </Button>
        </View>
    )
}

export default SplashScreen

const styles = StyleSheet.create({})