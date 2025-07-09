import React, { useState } from 'react'
import { ScrollView, TextInput } from 'react-native'
import { Button, Image, TamaguiProvider, Text, View, XStack, YStack } from 'tamagui'
import tamaguiConfig from '../../tamagui.config'

export default function Verification({
    navigation
}) {
    const [code, setCode] = useState(['', '', '', ''])

    const handleChange = (text, index) => {
        const newCode = [...code]
        newCode[index] = text.slice(-1)
        setCode(newCode)
    }

    return (
        <TamaguiProvider config={tamaguiConfig}>
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                <YStack f={1} ai="center" jc="center" bg="#3DC4A3" p="$4" space="$3">


                    <YStack ai="center" jc="center" my="$4">
                        <View
                            backgroundColor="white"
                            borderRadius={99}
                            paddingHorizontal={10}
                            alignItems="center"
                            justifyContent="center"
                            alignSelf="center"
                        >
                            <Image
                                source={require('../../assets/images/icon.png')}
                                width={150}
                                height={150}
                                resizeMode="contain"
                                mb="$4"
                            />
                        </View>
                    </YStack>


                    {/* Title */}
                    <Text fontSize={24} fontWeight="800" color="#000" textAlign="center" mb="$1">
                        Verify your number
                    </Text>

                    {/* Subtitle */}
                    <Text color="#000" textAlign="center" mb="$4">
                        We've sent a code to your phone
                    </Text>

                    {/* Code Input Boxes */}
                    <XStack space="$2" mb="$4">
                        {code.map((digit, index) => (
                            <TextInput
                                key={index}
                                style={{
                                    width: 50,
                                    height: 50,
                                    backgroundColor: '#fff',
                                    borderRadius: 8,
                                    textAlign: 'center',
                                    fontSize: 18
                                }}
                                maxLength={1}
                                keyboardType="number-pad"
                                value={digit}
                                onChangeText={(text) => handleChange(text, index)}
                            />
                        ))}
                    </XStack>

                    {/* Verify Button */}
                    <Button
                        w="90%"
                        bg="#1E1E1E"
                        color="#fff"
                        borderRadius={8}
                        fontWeight="700"
                        mb="$3"
                        onPress={() => navigation.navigate('Profile')}
                    >
                        Verify
                    </Button>

                     <Button
                        w="90%"
                        bg="#1E1E1E"
                        color="#fff"
                        borderRadius={8}
                        fontWeight="700"
                        mb="$3"
                        onPress={() => {
                            navigation.navigate('Verification')
                        }}
                    >
                        Send Me The Code
                    </Button>

                    {/* Resend Link */}
                    <Text fontSize={14} color="#000" textAlign="center">
                        Didn't receive code?{' '}
                        <Text fontWeight="700" color="#000">
                            Resend
                        </Text>
                    </Text>

                    {/* Timer Text */}
                    <Text fontSize={12} color="#000" textAlign="center" mt="$1">
                        You can request a new code in 4 seconds
                    </Text>

                </YStack>
            </ScrollView>
        </TamaguiProvider>
    )
}
