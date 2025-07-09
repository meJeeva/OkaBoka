import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import AboutYou from '../screens/AboutYou';
import CameraScreen from '../screens/CameraScreen';
import GalleryScreen from '../screens/GalleryScreen';
import Home from '../screens/Home';
import PreviewScreen from '../screens/PreviewScreen';
import Profile from '../screens/Profile';
import RelationshipDetails from '../screens/RelationshipDetails';
import SignUp from '../screens/SignUp';
import SplashScreen from './../screens/SplashScreen';
import Verification from './../screens/Verification';

const AppNavigator = () => {
    const NativeStack = createNativeStackNavigator();

    return (
        <NativeStack.Navigator>
            <NativeStack.Screen
                name="SplashScreen"
                component={SplashScreen}
                options={{ headerShown: false }}
            />
            <NativeStack.Screen
                name="SignUp"
                component={SignUp}
                options={{ headerShown: false }}
            />
            <NativeStack.Screen
                name="Verification"
                component={Verification}
                options={{ headerShown: false }}
            />
            <NativeStack.Screen
                name="Profile"
                component={Profile}
                options={{ headerShown: false }}
            />
            <NativeStack.Screen
                name="AboutYou"
                component={AboutYou}
                options={{ headerShown: false }}
            />
            <NativeStack.Screen
                name="RelationshipDetails"
                component={RelationshipDetails}
                options={{ headerShown: false }}
            />
            <NativeStack.Screen
                name="Home"
                component={Home}
                options={{ headerShown: false }}
            />
              <NativeStack.Screen name="Gallery" component={GalleryScreen} 
                options={{ headerShown: false }}

              />
        <NativeStack.Screen name="Camera" component={CameraScreen} 
                options={{ headerShown: false }}
        
        />
        <NativeStack.Screen name="Preview" component={PreviewScreen}
                options={{ headerShown: false }}
        
        />
        </NativeStack.Navigator>
    )

}
export default AppNavigator;