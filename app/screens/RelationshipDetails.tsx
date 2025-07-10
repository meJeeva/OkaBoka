import { useNavigation } from '@react-navigation/native'
import type { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { ArrowLeft } from '@tamagui/lucide-icons'
import React, { useState } from 'react'
import { SafeAreaView, ScrollView, StyleSheet, TextInput } from 'react-native'
import { Button, TamaguiProvider, Text, Theme, View, XStack, YStack } from 'tamagui'
import config from '../../tamagui.config'

interface RelationshipDetailsProps {
  navigation?: NativeStackNavigationProp<any>
}

const RelationshipDetails = ({ navigation }: RelationshipDetailsProps) => {
  const nav = navigation || useNavigation()
  const [areYou, setAreYou] = useState('')
  const [schoolName, setSchoolName] = useState('')
  const [studyingIn, setStudyingIn] = useState('')
  const [company, setCompany] = useState('')
  const [role, setRole] = useState('')
  const [workType, setWorkType] = useState('')

  return (
    <TamaguiProvider config={config}>
      <Theme name="light">
        <SafeAreaView style={styles.container}>


      {/* Back Icon */}
      <View p="$4" >
      <ArrowLeft color="#757575" size={24} marginTop={50}/>
      </View>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <YStack f={1} p="$4" space="$5">

            {/* Content */}
            <Text style={styles.content}>Let us understand who you're looking for and where you're at.</Text>

            {/* Interested In */}
            <YStack space="$3">
              <XStack ai="center" space="$2">
                <Text color="#000"
                fontFamily={'PoppinsSemiBold'}
                >Interested In</Text>
                <Text fontSize={12} color="#333" 
                fontFamily={'PoppinsRegular'}
                >(Who's energy do you connect with?)</Text>
              </XStack>

              <XStack space="$3" jc="space-between">
                <Button f={1} h={50} bg="#fff" borderRadius={12}>
                  <Text color="#000" 
                fontFamily={'PoppinsRegular'}
                  
                  >Male</Text>
                </Button>
                <Button f={1} h={50} bg="#fff" borderRadius={12}>
                  <Text color="#000" 
                fontFamily={'PoppinsRegular'}
                  
                  >Female</Text>
                </Button>
                <Button f={1} h={50} bg="#fff" borderRadius={12}>
                  <Text color="#000"
                fontFamily={'PoppinsRegular'}
                  
                  >Other</Text>
                </Button>
              </XStack>
            </YStack>

            {/* Relationship Status */}
            <YStack space="$3">
              <Text color="#000" 
                fontFamily={'PoppinsBold'}
                >Relationship Status</Text>
              <XStack space="$3">
                <Button f={1} h={50} bg="#fff" borderRadius={12}>
                  <Text color="#000" 
                fontFamily={'PoppinsRegular'}
                  >Single</Text>
                </Button>
                <Button f={1} h={50} bg="#fff" borderRadius={12}>
                  <Text color="#000" 
                fontFamily={'PoppinsRegular'}
                  >In A Relationship</Text>
                </Button>
              </XStack>
              <Button h={50} bg="#fff" borderRadius={12}>
                <Text color="#000" 
                fontFamily={'PoppinsRegular'}
                >Prefer Not To Say</Text>
              </Button>
            </YStack>

            {/* Are You */}
            <YStack space="$3">
              <Text 
                fontFamily={'PoppinsBold'}
              color="#000">Are You</Text>
              <XStack space="$3">
                <Button f={1} h={50} bg={areYou === 'Student' ? '#1E1E1E' : '#fff'} borderRadius={12} onPress={() => setAreYou('Student')}>
                  <Text color={areYou === 'Student' ? '#fff' : '#000'} 
                fontFamily={'PoppinsRegular'}
                  >Student</Text>
                </Button>
                <Button f={1} h={50} bg={areYou === 'Employee' ? '#1E1E1E' : '#fff'} borderRadius={12} onPress={() => setAreYou('Employee')}>
                  <Text color={areYou === 'Employee' ? '#fff' : '#000'} 
                fontFamily={'PoppinsRegular'}
                  >Employee</Text>
                </Button>
              </XStack>
              <XStack space="$3">
                <Button f={1} h={50} bg={areYou === 'Freelancer' ? '#1E1E1E' : '#fff'} borderRadius={12} onPress={() => setAreYou('Freelancer')}>
                  <Text color={areYou === 'Freelancer' ? '#fff' : '#000'} 
                fontFamily={'PoppinsRegular'}
                  >Freelancer</Text>
                </Button>
                <Button f={1} h={50} bg={areYou === 'Other' ? '#1E1E1E' : '#fff'} borderRadius={12} onPress={() => setAreYou('Other')}>
                  <Text color={areYou === 'Other' ? '#fff' : '#000'} 
                fontFamily={'PoppinsRegular'}
                  >Other</Text>
                </Button>
              </XStack>
            </YStack>

            {/* Conditional Inputs for Student */}
            {areYou === 'Student' && (
              <YStack space="$3" mt="$3">
                <Text fontFamily={'PoppinsRegular'} color="#000">What’s your school/college name?</Text>
                <TextInput
                  style={{
                    borderRadius: 8,
                    borderWidth: 1,
                    borderColor: '#ccc',
                    paddingLeft: 12,
                    fontFamily: 'PoppinsRegular',
                    fontSize: 12,
                    backgroundColor: '#fff',
                  }}
                  value={schoolName}
                  onChangeText={setSchoolName}
                  placeholder="Enter school/college name"
                  placeholderTextColor="#888"
                />
                <Text fontFamily={'PoppinsRegular'} color="#000">Currently studying in?</Text>
                <TextInput
                  style={{
                    borderRadius: 8,
                    borderWidth: 1,
                    borderColor: '#ccc',
                    paddingLeft: 12,
                    fontFamily: 'PoppinsRegular',
                    fontSize: 12,
                    backgroundColor: '#fff',
                  }}
                  value={studyingIn}
                  onChangeText={setStudyingIn}
                  placeholder="Enter your course/field"
                  placeholderTextColor="#888"
                />
              </YStack>
            )}

            {/* Conditional Inputs for Employee */}
            {areYou === 'Employee' && (
              <YStack space="$3" mt="$3">
                <Text fontFamily={'PoppinsRegular'} color="#000">Which company?</Text>
                <TextInput
                  style={{
                    borderRadius: 8,
                    borderWidth: 1,
                    borderColor: '#ccc',
                    paddingLeft: 12,
                    fontFamily: 'PoppinsRegular',
                    fontSize: 12,
                    backgroundColor: '#fff',
                  }}
                  value={company}
                  onChangeText={setCompany}
                  placeholder="Enter company name"
                  placeholderTextColor="#888"
                />
                <Text fontFamily={'PoppinsRegular'} color="#000">What’s your role there?</Text>
                <TextInput
                  style={{
                    borderRadius: 8,
                    borderWidth: 1,
                    borderColor: '#ccc',
                    paddingLeft: 12,
                    fontFamily: 'PoppinsRegular',
                    fontSize: 12,
                    backgroundColor: '#fff',
                  }}
                  value={role}
                  onChangeText={setRole}
                  placeholder="Enter your role"
                  placeholderTextColor="#888"
                />
              </YStack>
            )}

            {/* Conditional Inputs for Freelancer/Other */}
            {(areYou === 'Freelancer' || areYou === 'Other') && (
              <YStack space="$3" mt="$3">
                <Text fontFamily={'PoppinsRegular'} color="#000">What kind of work do you do?</Text>
                <TextInput
                  style={{
                    borderRadius: 8,
                    borderWidth: 1,
                    borderColor: '#ccc',
                    paddingLeft: 12,
                    fontFamily: 'PoppinsRegular',
                    fontSize: 12,
                    backgroundColor: '#fff',
                  }}
                  value={workType}
                  onChangeText={setWorkType}
                  placeholder="Describe your work"
                  placeholderTextColor="#888"
                />
              </YStack>
            )}

            {/* Spacer */}

            {/* Continue Button */}
            <Button h={50} bg="#2E2E2E" borderRadius={12} w={'50%'} marginHorizontal={'auto'} onPress={() => nav && typeof nav.navigate === 'function' && nav.navigate('Home')} mt={20}>
              <Text color="#fff">Continue</Text>
            </Button>

            {/* Text Under Continue */}
            <Text color="#000" ta="center" fontSize={12} 
                fontFamily={'PoppinsRegular'}
            >
              Your very first vibe
            </Text>

            {/* Skip For Now */}
            <Text color="#000" ta="center" fontWeight="700" fontSize={14} mt="$3"
                fontFamily={'PoppinsSemiBold'}
            >
              Skip For Now
            </Text>
          </YStack>

            </ScrollView>

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
    fontSize: 20,
    fontWeight: '400',
    color: '#000',
    fontFamily:'PoppinsBold'
  },
})

export default RelationshipDetails
