import { useNavigation } from '@react-navigation/native'
import {
  ArrowLeft,
  ArrowRight,
  Bell,
  ChevronDown,
  Plus,
  X
} from '@tamagui/lucide-icons'
import * as ImagePicker from 'expo-image-picker'
import React, { useState } from 'react'
import { Alert, FlatList, Modal, StyleSheet, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import {
  Button,
  Card,
  Image,
  ScrollView,
  TamaguiProvider,
  Text,
  Theme,
  View,
  XStack,
  YStack
} from 'tamagui'
import { feedData, moods } from '../../assets/data/FeedData'
import config from '../../tamagui.config'

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    color: '#000',
    marginLeft: 8,
    fontFamily:'PoppinsBold'
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
  const [showOptionModal, setShowOptionModal] = useState(false);

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

  const showOptions = () => setShowOptionModal(true);


  return (
    <TamaguiProvider config={config}>
      <Theme name="light">
        <SafeAreaView style={{ flex: 1 }}>
          <ScrollView contentContainerStyle={{ paddingBottom: 80 }}>
            {/* Top Section */}
            <YStack bg="#3AC6A5">
              {/* Top Bar */}
              <XStack jc="space-between" ai="center" px="$3">
                <XStack ai="center">
                <YStack ai="center" jc="center" my="$4">
  <View
    backgroundColor="white"
    borderRadius={99}
    alignItems="center"
    justifyContent="center"
    alignSelf="center"
    padding={5}
  >
    <Image
      source={require('../../assets/images/icon.png')}
      style={{
        width: 30,
        height: 30,
        resizeMode: 'contain',
      }}
    />
  </View>
</YStack>
                  <Text style={styles.title} ml="$2">
                    OkaBoka
                  </Text>
                </XStack>
                <XStack ai="center" space="$3">
                  <Bell size={22} color="#000" />
                  <Image
                    source={require('../../assets/images/Profile.png')}
                    w={35}
                    h={35}
                    br={15}
                  />
                </XStack>
              </XStack>

              {/* Mood Section */}
              <Text
                fontSize={20}
                color="#000"
                ta="center"
                fontFamily={'PoppinsBold'}
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
                  <Text fontSize={40} 
                  >{moods[moodIndex].emoji}</Text>
                  <Text fontSize={14} fontWeight="600" color="#000">
                    {moods[moodIndex].label}
                  </Text>
                  <Text fontSize={12} color="#555" 
                fontFamily={'PoppinsRegular'}
                  >
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
                        <Text fontSize={12} 
                                        fontFamily={'PoppinsRegular'}
                        >{mood.label}</Text>
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
                        <Text fontSize={12}
                                        fontFamily={'PoppinsSemiBold'}
                        >
                          {item.date}
                        </Text>
                        <Text fontSize={18}>{item.emoji}</Text>
                      </XStack>
                      <XStack ai="center" mt="$1">
                        <Text fontSize={10} color="#555" 
                                                                fontFamily={'PoppinsRegular'}
                        >
                          📍 {item.location}
                        </Text>
                      </XStack>
                      <Text fontSize={10} color="#444" mt="$2" ta={'center'} 
                      fontFamily={'PoppinsRegular'}
                      >
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
            <Text fs={16} color="#000" 
              fontFamily={'PoppinsBold'}
            >
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

  <Text fs={20} color="#000" 
              fontFamily={'PoppinsMedium'}
            >
              Bond
            </Text>
            <Text fs={16} color="#000" 
              fontFamily={'PoppinsMedium'}
            >
              Oka's
            </Text>
          </XStack>
        </SafeAreaView>
      </Theme>
      <Modal
        visible={showOptionModal}
        transparent
        animationType="fade"
        onRequestClose={() => setShowOptionModal(false)}
      >
        <XStack
          f={1}
          ai="center"
          jc="center"
          bg="rgba(0,0,0,0.4)"
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
        >
          <YStack
            bg="#fff"
            p="$5"
            br={20}
            w={280}
            ai="center"
            space="$3"
            shadowColor="#000"
            shadowOpacity={0.15}
            shadowRadius={10}
            position="relative"
          >
            {/* Back/Close Option */}
            <Button
              position="absolute"
              top={10}
              right={10}
              bg="transparent"
              onPress={() => setShowOptionModal(false)}
              p={0}
              minWidth={32}
              minHeight={32}
            >
              <X size={22} color="#333" />
            </Button>
            <Text fontFamily="PoppinsBold" fontSize={18} mb="$2">
              Select Option
            </Text>
            <Button
              w="100%"
              bg="#3AC6A5"
              color="#fff"
              onPress={() => {
                setShowOptionModal(false);
                openCamera();
              }}
            >
              Take Photo
            </Button>
            <Button
              w="100%"
              bg="#3AC6A5"
              color="#fff"
              onPress={() => {
                setShowOptionModal(false);
                openGallery();
              }}
            >
              Pick from Gallery
            </Button>
            <Button
              w="100%"
              bg="#eee"
              color="#333"
              onPress={() => setShowOptionModal(false)}
            >
              Cancel
            </Button>
          </YStack>
        </XStack>
      </Modal>
    </TamaguiProvider>
  )
}
