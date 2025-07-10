import React, { useState } from 'react'
import { ScrollView } from 'react-native'
import { Button, Image, Input, Separator, TamaguiProvider, Text, View, XStack, YStack } from 'tamagui'
import config from '../../tamagui.config'

export default function SignUp({
    navigation
}) {
    const [phoneNumber, setPhoneNumber] = useState('')

    return (
        <TamaguiProvider config={config}>
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                <YStack f={1} ai="center" jc="center" bg="#3DC4A3" p="$4" space="$3">

                    {/* Title */}
                    <Text fontFamily="PoppinsSemiBold" fontWeight="700" fontSize={26} color="#000" textAlign="center" mt="$5">
                        Welcome to okaBoka
                    </Text>

                    {/* Subtitle */}
                    <Text fontFamily="PoppinsMedium" fontSize={14} color="#000" textAlign="center" mt="$1" mb="$3">
                        Connect with emotionally similar people
                    </Text>

                    {/* Logo */}
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
                    </YStack>

                    {/* Secondary Text */}
                    <Text fontSize={16} fontFamily="PoppinsMedium" marginHorizontal={10} color="#000" textAlign="center" mb="$4">
                        Let’s start with your number your world begins here.
                    </Text>

                    {/* Phone Number Label */}
                    <Text alignSelf="flex-start" fontFamily="PoppinsSemiBold" ml="$2" fontWeight="700" mb="$1">
                        Phone Number
                    </Text>

                    {/* Input */}
                    <Input
                        placeholder="Enter your phone number"
                        keyboardType="phone-pad"
                        value={phoneNumber}
                        onChangeText={setPhoneNumber}
                        w="90%"
                        borderWidth={1}
                        borderColor="#ccc"
                        p="$3"
                        borderRadius={8}
                        bg="$background"
                    />

                    {/* Separator with OR */}
                    <XStack ai="center" jc="center" w="90%" my="$3">
                        <Separator flex={1} bg="#ccc" />
                        <Text mx="$2" fontFamily="PoppinsRegular">or</Text>
                        <Separator flex={1} bg="#ccc" />
                    </XStack>

                    {/* Continue with WhatsApp */}
                    <Button
                        w="90%"
                        bg="#fff"
                        borderWidth={1}
                        borderColor="#ccc"
                        color="#000"
                        borderRadius={8}
                        mb="$2"
                        fontFamily="PoppinsMedium"
                    >
                        Continue With Whatsapp
                    </Button>

                    {/* Send Code Button */}
                    <Button
                        w="50%"
                        bg="#1E1E1E"
                        color="#fff"
                        borderRadius={8}
                        mb="$3"
                        onPress={() => {
                            navigation.navigate('Verification')
                        }}
                    >
                        Send Me The Code
                    </Button>

                    {/* Footer Text */}
                    <Text fontSize={12} color="#000" textAlign="center"
                        fontFamily="PoppinsMedium"
                    >
                        We'll never share your number
                    </Text>

                </YStack>
            </ScrollView>
        </TamaguiProvider>
    )
}
