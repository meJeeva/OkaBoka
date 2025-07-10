import React, { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { Image, Text, YStack } from 'tamagui';

const SplashScreen = ({
    navigation
}) => {

    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('SignUp')
        }, 3000);
    }, [navigation]);

    return (
        <YStack f={1} ai="center" jc="center" bg="#3DC4A3" p="$4" space="$3">

            <YStack ai="center" jc="center" my="$4">
                <View
                    backgroundColor="white"
                    borderRadius={99}
                    alignItems="center"
                    justifyContent="center"
                    alignSelf="center"
                    padding={12}
                >
                    <Image
                        source={require('../../assets/images/icon.png')}
                        style={{
                            width: 120,
                            height: 120,
                            resizeMode: 'contain',
                        }}
                    />
                </View>
                <Text fontFamily={'PoppinsBold'} fontSize={32} mt={10}>okaBoka</Text>
            </YStack>
        </YStack>
    )
}

export default SplashScreen

const styles = StyleSheet.create({})