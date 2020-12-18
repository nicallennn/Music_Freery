/**
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MenuButton from './components/MenuButton'

import {
  MajorScaleScreen,
  NatMinorScaleScreen,
  HarMinorScaleScreen,
  MelMinorScaleScreen,
  MajorPentatonicScaleScreen,
  MinorPentatonicScaleScreen,
  DorianModeScreen,
  PhrygianModeScreen,
  LydianModeScreen,
  MixolydianModeScreen,
  LocrianModeScreen} from './screens/scales/ScaleScreens'

import {
  ChordsOverviewScreen,
  TriadOverviewScreen,
  MajorTriadScreen,
  MinorTriadScreen,
  AugmentedTriadScreen,
  DiminishedTriadScreen,
  SeventhOverviewScreen,
  MajorSeventhScreen,
  MinorSeventhScreen,
  AugmentedSeventhScreen,
  DiminishedSeventhScreen,
  InvertedChordsScreen,
  SuspendedChordsScreen,
  NinthChordsScreen,
  EleventhChordsScreen,
  ThirteenthChordsScreen
} from './screens/chords/ChordScreens'


import {
  introMenu,
  scalesMenu,
  chordMenu,
  keysMenu
} from './data/MenuItemsData'

const Tab = createBottomTabNavigator();

import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  Image,
  StatusBar,
  Button,
  Frame,
  TouchableOpacity,
  useState,
  FlatList
} from 'react-native';

/* *************** SCALES ******************** */
const ScalesStack = createStackNavigator();
const ScalesScreen = () => {
  return (
  <ScalesStack.Navigator 
  screenOptions={{
        headerStyle: {
          backgroundColor: '#120022',
        },
        headerTintColor: 'white',
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 22
        },
      }}>
      <ScalesStack.Screen name="Scales" component={ScalesListScreen} />
      <ScalesStack.Screen name="Scales Overview" component={ScalesOverview} />
      <ScalesStack.Screen name="Major" component={MajorScaleScreen} />
      <ScalesStack.Screen name="Natural Minor" component={NatMinorScaleScreen} />
      <ScalesStack.Screen name="Harmonic Minor" component={HarMinorScaleScreen} />
      <ScalesStack.Screen name="Melodic Minor" component={MelMinorScaleScreen} />
      <ScalesStack.Screen name="Major Pentatonic" component={MajorPentatonicScaleScreen} />
      <ScalesStack.Screen name="Minor Pentatonic" component={MinorPentatonicScaleScreen} />
      <ScalesStack.Screen name="Dorian Scale" component={DorianModeScreen} />
      <ScalesStack.Screen name="Phrygian Scale" component={PhrygianModeScreen} />
      <ScalesStack.Screen name="Lydian Scale" component={LydianModeScreen} />
      <ScalesStack.Screen name="Mixolydian Scale" component={MixolydianModeScreen} />
      <ScalesStack.Screen name="Locrian Scale" component={LocrianModeScreen} />
    </ScalesStack.Navigator>
  );
}

const ScalesListScreen = ({navigation}) => {
  return (
    <View style={{ backgroundColor: 'white', flex: 1, paddingLeft: 20, paddingRight: 20}}>  
        <FlatList
              data={scalesMenu.scales}
              showsVerticalScrollIndicator = {false}
              renderItem={({item}) => (
                <MenuButton info={item} />
              )} />
    </View>
    
  );
}

const ScalesOverview = ({navigation}) => {
  return (
    <ScrollView>
    <View style={scaleStyles.layout}>
      <Text style={scaleStyles.descriptionText}>A scale is a rising or falling series of notes, usually within the range of an octave and repeated in all other octaves. 
      Music of every possible kind uses scales. Notes are selected from a scale for the purposes of melody and harmony. In a melody, the notes of the scale are used successively—that is, as a linear progression of notes, whereas in a chord, different notes of a scale are played at the same time </Text>

      <Text style={scaleStyles.descriptionText}>
        There are many kinds of scales used in the music of the world: the chromatic, major, and minor scales common to Western classical and popular music; the pentatonic scale popular in both folk and dance music; the microtonal scales found in the music of the Near and Far East; the modal scales also used in folk music and popular, experimental rock, and dance music; the octatonic and hexatonic scales often used as variants of the major and minor scales by modern classical and film composers; and the exotic scales commonly used by composers and music producers to create unusual atmospheres. 
        </Text>

        <TouchableOpacity
          style={scaleStyles.buttonRounded}
          onPress={() => navigation.navigate('Scales')}>
            <Text style={scaleStyles.buttonRoundedText}> start exploring </Text>
        </TouchableOpacity>
    </View>
    </ScrollView>
  );
}

/* *************** INTRO ******************** */
const IntroStack = createStackNavigator();
const IntroScreen = () => {
  return (
  <IntroStack.Navigator 
  screenOptions={{
        headerStyle: {
          backgroundColor: '#120022',
        },
        headerTintColor: 'white',
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 22
        },
      }}>
      <ChordsStack.Screen name="Intro" component={IntroListScreen} />
      <ChordsStack.Screen name="Notes" component={IntroListScreen} />
      <ChordsStack.Screen name="Time" component={IntroListScreen} />
      <ChordsStack.Screen name="Counting" component={IntroListScreen} />
      <ChordsStack.Screen name="Intervals" component={IntroListScreen} />        
    </IntroStack.Navigator>
    )

}

const IntroListScreen = ({navigation}) => {
  return (
    <View style={{ backgroundColor: 'white', flex: 1, paddingLeft: 20, paddingRight: 20}}>  
        <FlatList
              data={introMenu.topics}
              showsVerticalScrollIndicator = {false}
              renderItem={({item}) => (
                <MenuButton info={item} />
              )} />
    </View>
    
  );
}

/* *************** CHORDS ******************** */
const ChordsStack = createStackNavigator();
const ChordsScreen = () => {
  return (
  <ChordsStack.Navigator 
  screenOptions={{
        headerStyle: {
          backgroundColor: '#120022',
        },
        headerTintColor: 'white',
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 22
        },
      }}>
      <ChordsStack.Screen name="Scales" component={ChordListScreen} />
      <ChordsStack.Screen name="Chords Overview" component={ChordsOverviewScreen} />

      <ChordsStack.Screen name="Triads" component={TriadChordsMenuScreen} />
      <ChordsStack.Screen name="Triads Overview" component={TriadOverviewScreen} />
      <ChordsStack.Screen name="Major Triads" component={MajorTriadScreen} />
      <ChordsStack.Screen name="Minor Triads" component={MinorTriadScreen} />
      <ChordsStack.Screen name="Augmented Triads" component={AugmentedTriadScreen} />
      <ChordsStack.Screen name="Diminished Triads" component={DiminishedTriadScreen} />

      <ChordsStack.Screen name="Seventh Chords" component={SeventhChordsMenuScreen} />
      <ChordsStack.Screen name="Seventh Overview" component={SeventhOverviewScreen} />
      <ChordsStack.Screen name="Major Sevenths" component={MajorSeventhScreen} />
      <ChordsStack.Screen name="Minor Sevenths" component={MinorSeventhScreen} />
      <ChordsStack.Screen name="Augmented Sevenths" component={AugmentedSeventhScreen} />
      <ChordsStack.Screen name="Diminished Sevenths" component={DiminishedSeventhScreen} />

      <ChordsStack.Screen name="Inverted Chords" component={InvertedChordsScreen} />
      <ChordsStack.Screen name="Suspended Chords" component={SuspendedChordsScreen} />
      <ChordsStack.Screen name="Ninth Chords" component={NinthChordsScreen} />
      <ChordsStack.Screen name="Eleventh Chords" component={EleventhChordsScreen} />
      <ChordsStack.Screen name="Thirteenth Chords" component={ThirteenthChordsScreen} />      
    </ChordsStack.Navigator>
    )
};


const ChordListScreen = () => {
  return(
    <View style={{ backgroundColor: 'white', flex: 1, paddingLeft: 20, paddingRight: 20}}>  
        <FlatList
              data={chordMenu.chords}
              showsVerticalScrollIndicator = {false}
              renderItem={({item}) => (
                <MenuButton info={item} />
              )} />
    </View>
  );
}


const TriadChordsMenuScreen = () => {
  return (
    <View style={{ backgroundColor: 'white', flex: 1, paddingLeft: 20, paddingRight: 20}}>  
        <FlatList
              data={chordMenu.triadChords}
              showsVerticalScrollIndicator = {false}
              renderItem={({item}) => (
                <MenuButton info={item} />
              )} />
    </View>
  );
}

const SeventhChordsMenuScreen = () => {
  return (
    <View style={{ backgroundColor: 'white', flex: 1, paddingLeft: 20, paddingRight: 20}}>  
        <FlatList
              data={chordMenu.seventhChords}
              showsVerticalScrollIndicator = {false}
              renderItem={({item}) => (
                <MenuButton info={item} />
              )} />
    </View>
  );
}


/* *************** KEYS ******************** */
const KeysStack = createStackNavigator();
const KeysScreen = () => {
  return (
  <ChordsStack.Navigator 
  screenOptions={{
        headerStyle: {
          backgroundColor: '#120022',
        },
        headerTintColor: 'white',
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 22
        },
      }}>
      <ChordsStack.Screen name="Keys" component={KeysListScreen} />

   
    </ChordsStack.Navigator>
    )
};


const KeysListScreen = () => {
  return(
    <View style={{ backgroundColor: 'white', flex: 1, paddingLeft: 20, paddingRight: 20}}>  
        <FlatList
              data={keysMenu.menuItems}
              showsVerticalScrollIndicator = {false}
              renderItem={({item}) => (
                <MenuButton info={item} />
              )} />
    </View>
  );
}



const App = () => {
  return (
    <>
      <StatusBar backgroundColor="#120022" />
      <NavigationContainer >
        <Tab.Navigator screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === 'Intro') {
                iconName = focused
                  ? 'music-note'
                  : 'music-note';
              } else if (route.name === 'Scales') {
                iconName = focused ? 'music-clef-treble' : 'music-clef-treble';
              } else if (route.name === 'Chords') {
                iconName = focused ? 'music-note-plus' : 'music-note-plus';
              }
               else if (route.name === 'Keys') {
                iconName = focused ? 'key' : 'key';
              }
              else if (route.name === 'Progressions') {
                iconName = focused ? 'playlist-music' : 'playlist-music';
              }
              
              return <MaterialCommunityIcons name={iconName} size={size} color={color}  />;
            },
          })}
          tabBarOptions={{
            activeTintColor: '#120022',
            inactiveTintColor: 'gray',
          }}>
          <Tab.Screen name="Intro" component={IntroScreen} />
          <Tab.Screen name="Scales" component={ScalesScreen} />
          <Tab.Screen name="Chords" component={ChordsScreen} />
          <Tab.Screen name="Keys" component={KeysScreen} />
      </Tab.Navigator>
      </NavigationContainer>
    </>
  );
};


const scaleStyles = StyleSheet.create({
  layout: {
     flex: 1, 
     padding: 20,
     backgroundColor: 'white'
  },
  titleText: {
    fontWeight: 'bold',
    fontSize: 18
  },
  centerTitleText: {
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center'
  },
  descriptionText: {
    marginBottom: 20,
    fontSize: 16
  },
  buttonRounded: {
    flex: 1,
    padding: 15,
    color: 'white',
    backgroundColor:'#120022',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    margin: 10,
    borderColor: '#120022'
  },
  buttonRoundedText: {
    color: 'white',
    textTransform: 'uppercase',
    fontWeight: 'bold',
    textAlign: 'center'
  }
});

const styles = StyleSheet.create({
  button: {
    padding: 20,
    color: 'white',
    backgroundColor:'#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 1,
    borderColor: '#120022'
  },
  buttonText: {
    color: '#120022',
    textTransform: 'uppercase',
    fontWeight: 'bold'
  }

});


export default App;
