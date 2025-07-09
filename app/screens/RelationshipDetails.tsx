import { useNavigation } from '@react-navigation/native'
import type { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { ArrowLeft } from '@tamagui/lucide-icons'
import React from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'
import { Button, TamaguiProvider, Text, Theme, View, XStack, YStack } from 'tamagui'
import config from '../../tamagui.config'

interface RelationshipDetailsProps {
  navigation?: NativeStackNavigationProp<any>
}

const RelationshipDetails = ({ navigation }: RelationshipDetailsProps) => {
  const nav = navigation || useNavigation()

  return (
    <TamaguiProvider config={config}>
      <Theme name="light">
        <SafeAreaView style={styles.container}>
          <YStack f={1} p="$4" space="$5">

            {/* Back Icon */}
            <Button
              icon={ArrowLeft}
              size="$3"
              variant="outlined"
              bg="transparent"
              borderWidth={0}
              alignSelf="flex-start"
            />

            {/* Title */}
            <Text style={styles.title}>Relationship Details Screen</Text>

            {/* Content */}
            <Text style={styles.content}>Let us understand who you're{'\n'}
              looking for and where you're at.</Text>

            {/* Interested In */}
            <YStack space="$3">
              <XStack ai="center" space="$2">
                <Text fontWeight="700" color="#000">Interested In</Text>
                <Text fontSize={12} color="#333">(Who's energy do you connect with?)</Text>
              </XStack>

              <XStack space="$3" jc="space-between">
                <Button f={1} h={50} bg="#fff" borderRadius={12}>
                  <Text color="#000">Male</Text>
                </Button>
                <Button f={1} h={50} bg="#fff" borderRadius={12}>
                  <Text color="#000">Female</Text>
                </Button>
                <Button f={1} h={50} bg="#fff" borderRadius={12}>
                  <Text color="#000">Other</Text>
                </Button>
              </XStack>
            </YStack>

            {/* Relationship Status */}
            <YStack space="$3">
              <Text fontWeight="700" color="#000">Relationship Status</Text>
              <XStack space="$3">
                <Button f={1} h={50} bg="#fff" borderRadius={12}>
                  <Text color="#000">Single</Text>
                </Button>
                <Button f={1} h={50} bg="#fff" borderRadius={12}>
                  <Text color="#000">In A Relationship</Text>
                </Button>
              </XStack>
              <Button h={50} bg="#fff" borderRadius={12}>
                <Text color="#000">Prefer Not To Say</Text>
              </Button>
            </YStack>

            {/* Are You */}
            <YStack space="$3">
              <Text fontWeight="700" color="#000">Are You</Text>
              <XStack space="$3">
                <Button f={1} h={50} bg="#fff" borderRadius={12}>
                  <Text color="#000">Student</Text>
                </Button>
                <Button f={1} h={50} bg="#fff" borderRadius={12}>
                  <Text color="#000">Employee</Text>
                </Button>
              </XStack>
              <XStack space="$3">
                <Button f={1} h={50} bg="#fff" borderRadius={12}>
                  <Text color="#000">Freelancer</Text>
                </Button>
                <Button f={1} h={50} bg="#fff" borderRadius={12}>
                  <Text color="#000">Other</Text>
                </Button>
              </XStack>
            </YStack>

            {/* Spacer */}
            <View f={1} />

            {/* Continue Button */}
            <Button h={50} bg="#2E2E2E" borderRadius={12} onPress={() => nav && typeof nav.navigate === 'function' && nav.navigate('Home')}>
              <Text color="#fff">Continue</Text>
            </Button>

            {/* Text Under Continue */}
            <Text color="#000" ta="center" fontSize={12} mt="$2">
              Your very first vibe
            </Text>

            {/* Skip For Now */}
            <Text color="#000" ta="center" fontWeight="700" fontSize={14} mt="$3">
              Skip For Now
            </Text>

          </YStack>
        </SafeAreaView>
      </Theme>
    </TamaguiProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3AC6A5',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 12,
    color: '#000',
  },
  content: {
    fontSize: 16,
    fontWeight: '400',
    color: '#000',
    textAlign: 'center',
  },
})

export default RelationshipDetails
