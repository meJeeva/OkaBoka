import { useNavigation } from '@react-navigation/native'
import type { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { ArrowLeft } from '@tamagui/lucide-icons'
import React, { useState } from 'react'
import { Dimensions, StyleSheet, TextInput } from 'react-native'
import { Button, Text, View, XStack, YStack } from 'tamagui'

// Define the navigation prop type
// Replace 'RootStackParamList' with your actual stack param list if available
interface AboutYouProps {
  navigation?: NativeStackNavigationProp<any>
}

export default function AboutYou({ navigation }: AboutYouProps) {
  const [dob, setDob] = useState({ dd: '', mm: '', yyyy: '' })
  const [gender, setGender] = useState('')
  const [about, setAbout] = useState('')
  const [location, setLocation] = useState('')
  const [useCurrentLocation, setUseCurrentLocation] = useState(false)
  const nav = navigation || useNavigation()

  const handleContinue = () => {
    if (nav && typeof nav.navigate === 'function') {
      nav.navigate('RelationshipDetails')
    }
  }

  return (
    <YStack f={1} bg="#3DC4A3" p="$4" space="$3">
      
      {/* Back Icon */}
      <ArrowLeft color="#000" size={24} marginTop={50}/>

      {/* Title */}
      <Text fontSize={20} fontWeight="800" color="#000" mt="$3">
        About You Screen
      </Text>

      {/* Date of Birth */}
      <Text fontSize={14} fontWeight="700" color="#000" mt="$4">
        Date of Birth
      </Text>

      <XStack space="$2" mt="$2">
        <TextInput
          style={styles.inputSmall}
          placeholder="DD"
          keyboardType="numeric"
          maxLength={2}
          value={dob.dd}
          onChangeText={(v) => setDob({ ...dob, dd: v })}
        />
        <TextInput
          style={styles.inputSmall}
          placeholder="MM"
          keyboardType="numeric"
          maxLength={2}
          value={dob.mm}
          onChangeText={(v) => setDob({ ...dob, mm: v })}
        />
        <TextInput
          style={styles.inputSmall}
          placeholder="YYYY"
          keyboardType="numeric"
          maxLength={4}
          value={dob.yyyy}
          onChangeText={(v) => setDob({ ...dob, yyyy: v })}
        />
      </XStack>

      {/* Gender */}
      <Text fontSize={14} fontWeight="700" color="#000" mt="$4">
        Gender
      </Text>

      <XStack space="$2" mt="$2">
        {['Male', 'Female', 'Other'].map((item) => (
          <Button
            key={item}
            flex={1}
            height={50}
            bg={gender === item ? '#1E1E1E' : 'white'}
            color={gender === item ? 'white' : 'black'}
            onPress={() => setGender(item)}
          >
            {item}
          </Button>
        ))}
      </XStack>

      {/* About TextInput */}
      <TextInput
        style={styles.input}
        placeholder="Write Here"
        value={about}
        onChangeText={setAbout}
      />

      {/* Location */}
      <Text fontSize={14} fontWeight="700" color="#000" mt="$3">
        Location <Text color="gray">(City,Country)</Text>
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Your Location"
        value={location}
        onChangeText={setLocation}
      />

      {/* Use current location */}
      <XStack ai="center" space="$2" mt="$3">
        <View
          width={12}
          height={12}
          borderRadius={6}
          bg={useCurrentLocation ? 'green' : 'white'}
          borderWidth={1}
          borderColor="#000"
          onTouchEnd={() => setUseCurrentLocation(!useCurrentLocation)}
        />
        <Text fontSize={14} color="#000">
          Use current location
        </Text>
      </XStack>

      {/* Continue Button */}
      <Button
        mt="$5"
        bg="#1E1E1E"
        color="white"
        borderRadius={8}
        fontWeight="700"
        height={50}
        onPress={handleContinue}
      >
        Continue
      </Button>

      {/* Footer Text */}
      <Text fontSize={12} color="#000" textAlign="center" mt="$2">
        Who are you open to connecting with?
      </Text>
    </YStack>
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
  inputSmall: {
    flex: 1,
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingHorizontal: 16,
    fontSize: 16
  },
  input: {
    width: Dimensions.get('window').width - 32, // 16px padding on each side
    height: 50,
    backgroundColor: '#fff',
    borderRadius: 8,
    paddingHorizontal: 16,
    fontSize: 16,
    marginTop: 10
  }
})
