import type { NativeStackNavigationProp } from '@react-navigation/native-stack'
import React, { useState } from 'react'
import { StyleSheet, TextInput, View } from 'react-native'
import { Button, Image, TamaguiProvider, Text, YStack } from 'tamagui'
import tamaguiConfig from '../../tamagui.config'

export default function Profile({ navigation }: { navigation: NativeStackNavigationProp<any> }) {
  const [name, setName] = useState('')

  return (
    <TamaguiProvider config={tamaguiConfig}>
      <YStack f={1} ai="center" jc="center" bg="#3DC4A3" p="$4" space="$3">

        {/* Profile Image */}
        <View
        
        >
          <Image
            source={require('../../assets/images/Profile.png')}
            width={150}
            height={150}
            borderRadius={99}
            resizeMode="cover"
          />
        </View>

        {/* Title */}
        <Text fontSize={20}  color="#000" textAlign="center" mb="$3"
        fontFamily="PoppinsBold"
        >
          What should we call you?
        </Text>

        {/* Input Label */}
        <Text fontSize={15} 
        fontFamily="PoppinsSemiBold"
        color="#000" alignSelf="flex-start">
          Full Name
        </Text>

        {/* Name Input */}
        <TextInput
          style={{
            width: '100%',
            height: 50,
            backgroundColor: '#fff',
            borderRadius: 8,
            paddingHorizontal: 16,
            fontSize: 16,
            marginBottom: 20
          }}
          placeholder="Your Name"
          placeholderTextColor="#888"
          value={name}
          onChangeText={setName}
        />

        {/* Button */}
        <Button
          w="70%"
          bg="#1E1E1E"
          color="#fff"
          borderRadius={8}
          fontWeight="700"
          mb="$3"
          onPress={() => navigation.navigate('AboutYou')}
        >
          Lets Get To Know You
        </Button>

        {/* Footer Text */}
        <Text fontSize={12} color="#000"
        fontFamily="PoppinsSemiBold"
        >
          Your safety is our priority
        </Text>

      </YStack>
    </TamaguiProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    padding: 16,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 12,
  },
  content: {
    fontSize: 16,
    fontWeight: '400',
    color: '#333',
    textAlign: 'center',
  },
});
