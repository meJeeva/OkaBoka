import { useNavigation } from '@react-navigation/native'
import {
  ArrowLeft,
  ArrowRight,
  Bell,
  ChevronDown,
  Plus
} from '@tamagui/lucide-icons'
import * as ImagePicker from 'expo-image-picker'
import React, { useState } from 'react'
import { Alert, FlatList, StyleSheet, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import {
  Button,
  Card,
  Image,
  ScrollView,
  TamaguiProvider,
  Text,
  Theme,
  XStack,
  YStack
} from 'tamagui'
import { feedData, moods } from '../../assets/data/FeedData'
import config from '../../tamagui.config'

const styles = StyleSheet.create({
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000',
    marginLeft: 8,
  },
  content: {
    fontSize: 16,
    fontWeight: '400',
    color: '#333',
  },
});

export default function Home() {
  const [expandedIds, setExpandedIds] = useState<string[]>([])
  const [moodIndex, setMoodIndex] = useState(0)

  const navigation  = useNavigation();

  const toggleExpand = (id: string) => {
    setExpandedIds((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    )
  }

  const isExpanded = (id: string) => expandedIds.includes(id)

  const handleLeft = () => {
    setMoodIndex((prev) => (prev === 0 ? moods.length - 1 : prev - 1))
  }

  const handleRight = () => {
    setMoodIndex((prev) => (prev === moods.length - 1 ? 0 : prev + 1))
  }

  const selectMood = (index: number) => {
    setMoodIndex(index)
  }

  
  const openCamera = async () => {
    const { granted } = await ImagePicker.requestCameraPermissionsAsync()
    if (!granted) {
      Alert.alert('Permission Denied')
      return
    }
    const result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
    })
    if (!result.canceled) {
      navigation.navigate('Preview', { image: result.assets[0] })
    }
  }

  const openGallery = async () => {
    const { granted } = await ImagePicker.requestMediaLibraryPermissionsAsync()
    if (!granted) {
      Alert.alert('Permission Denied')
      return
    }
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
    })
    if (!result.canceled && result.assets && result.assets.length > 0) {
      // @ts-ignore
      navigation.navigate('Preview' as never, { image: result.assets[0] } as never)
    }
  }

  const showOptions = () => {
    Alert.alert('Select Option', 'How do you want to add a moment?', [
      { text: 'Take Photo', onPress: openCamera },
      { text: 'Pick from Gallery', onPress: openGallery },
      { text: 'Cancel', style: 'cancel' },
    ])
  }


  return (
    <TamaguiProvider config={config}>
      <Theme name="light">
        <SafeAreaView style={{ flex: 1 }}>
          <ScrollView contentContainerStyle={{ paddingBottom: 80 }}>
            {/* Top Section */}
            <YStack bg="#3AC6A5">
              {/* Top Bar */}
              <XStack jc="space-between" ai="center" px="$3" py="$5">
                <XStack ai="center">
                  <Image
                    source={{ uri: 'https://i.imgur.com/Hh3y8z8.png' }}
                    w={30}
                    h={30}
                    br={15}
                  />
                  <Text style={styles.title} ml="$2">
                    OkaBoka
                  </Text>
                </XStack>
                <XStack ai="center" space="$3">
                  <Bell size={22} color="#000" />
                  <Image
                    source={{ uri: 'https://i.imgur.com/BqHjLdR.png' }}
                    w={30}
                    h={30}
                    br={15}
                  />
                </XStack>
              </XStack>

              {/* Mood Section */}
              <Text
                fontSize={18}
                fontWeight="700"
                color="#000"
                ta="center"
                mt="$2"
              >
                How I'm Feeling Right Now
              </Text>

              <XStack jc="center" ai="center" space="$2" mt="$3">
                <Button
                  onPress={handleLeft}
                  circular
                  icon={ArrowLeft}
                  size="$2"
                  bg="transparent"
                />
                <YStack ai="center">
                  <Text fontSize={40}>{moods[moodIndex].emoji}</Text>
                  <Text fontSize={14} fontWeight="600" color="#000">
                    {moods[moodIndex].label}
                  </Text>
                  <Text fontSize={12} color="#555">
                    {moods[moodIndex].count}
                  </Text>
                </YStack>
                <Button
                  onPress={handleRight}
                  circular
                  icon={ArrowRight}
                  size="$2"
                  bg="transparent"
                />
              </XStack>

              {/* Scrollable Emoji Mood Bar */}
              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                  paddingHorizontal: 16,
                  marginTop: 12,
                  marginBottom: 16
                }}
              >
                <XStack gap={20}>
                  {moods.map((mood, index) => (
                    <TouchableOpacity
                      key={index}
                      onPress={() => selectMood(index)}
                    >
                      <YStack
                        ai="center"
                        opacity={moodIndex === index ? 1 : 0.5}
                      >
                        <Text fontSize={30}>{mood.emoji}</Text>
                        <Text fontSize={12}>{mood.label}</Text>
                      </YStack>
                    </TouchableOpacity>
                  ))}
                </XStack>
              </ScrollView>
            </YStack>

            {/* Feed Section */}
            <YStack bg="#f9f9f9">
              <FlatList
                data={feedData}
                scrollEnabled={false}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => {
                  const expanded = isExpanded(item.id)
                  const imagesToShow = expanded
                    ? item.images
                    : item.images.slice(0, 6)

                  return (
                    <Card
                      bg="#fff"
                      mx="$2"
                      my="$2"
                      p="$3"
                      br="$4"
                      shadowColor="#00000022"
                    >
                      <XStack jc="space-between" ai="center">
                        <Text fontSize={13} fontWeight="700">
                          {item.date}
                        </Text>
                        <Text fontSize={18}>{item.emoji}</Text>
                      </XStack>
                      <XStack ai="center" mt="$1">
                        <Text fontSize={12} color="#555">
                          📍 {item.location}
                        </Text>
                      </XStack>
                      <Text fontSize={12} color="#444" mt="$2">
                        {item.description}
                      </Text>

                      {/* Images */}
                      <XStack flexWrap="wrap" mt="$2" space="$1">
                        {imagesToShow.map((url, i) => (
                          <Image
                            key={i}
                            source={{ uri: url }}
                            w="30%"
                            h={70}
                            br="$2"
                            margin={2}
                          />
                        ))}
                      </XStack>

                      {/* Expand / Collapse Button */}
                      {item.images.length > 6 && (
                        <XStack jc="center" ai="center" mt="$3">
                          <Text
                            fontSize={12}
                            color="#888"
                            ta="center"
                            onPress={() => toggleExpand(item.id)}
                            alignItems="center"
                          >
                            {expanded
                              ? 'Show Less'
                              : `${item.images.length - 6} More Moments`}{' '}
                          </Text>
                          <ChevronDown size={14} color="#888" />
                        </XStack>
                      )}
                    </Card>
                  )
                }}
              />
            </YStack>
          </ScrollView>


          {/* Bottom Bar */}
          <XStack
            bg="#3AC6A5"
            h={60}
            ai="center"
            jc="space-around"
            position="absolute"
            bottom={0}
            width="100%"
          >
            <Text fontWeight="700" color="#000">
              Oka (You)
            </Text>
            {/* Plus Button in Center */}
  <Button
    w={50}
    h={50}
    br={25}
    bg="#3AC6A5"
    ai="center"
    jc="center"
    position="absolute"
    top={-55}
    left="50%"
    style={{ transform: [{ translateX: -25 }] }}
    borderWidth={2}
    borderColor={"#000"}
    onPress={showOptions}
  >
    <Plus color="#fff" />
  </Button>

            <Text fontWeight="700" color="#000">
              Bond
            </Text>
            <Text fontWeight="700" color="#000">
              Oka's
            </Text>
          </XStack>
        </SafeAreaView>
      </Theme>
    </TamaguiProvider>
  )
}
