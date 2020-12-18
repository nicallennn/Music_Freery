import 'react-native-gesture-handler';
import * as React from 'react';
import {
  Text,
  SectionList,
  View,
  Image,
  StyleSheet
} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

import {
  majorScale, 
  natMinorScale, 
  harMinorScale, 
  melMinorScale, 
  majorPentatonicScale, 
  minorPentatonicScale,
  dorianScale,
  phrygianScale,
  lydianScale,
  mixolydianScale,
  locrianScale
} from '../../data/ScalesData';

const ChordsOverviewScreen = () => {
  return (
    <Text>Chords Overview</Text>
  );
}

/* *************** TRIADS ******************** */
const TriadOverviewScreen = () => {
  return (
    <Text>Triad Overview</Text>
  );
}

const MajorTriadScreen = () => {
  return (
    <Text>Major Triad</Text>
  );
}

const MinorTriadScreen = () => {
  return (
    <Text>Major Triad</Text>
  );
}

const AugmentedTriadScreen = () => {
  return (
    <Text>Augmented Triad</Text>
  );
}

const DiminishedTriadScreen = () => {
  return (
    <Text>Diminished Triad</Text>
  );
}

const TriadChordsScreen = () => {
  const DATA = [
  {
    title: "Major Triads",
    data: majorScale.positions
  },
  {
    title: "Minor Triads",
    data: natMinorScale.positions
  },
  {
    title: "Augmented Triads",
    data: majorScale.positions
  },
  {
    title: "Diminshed Triads",
    data: natMinorScale.positions
  },
  
];
  return (
  <View>
    
    <SectionList
        ListHeaderComponent={
          <View style={chordStyles.layout}>
            <Text style={chordStyles.titleText}>Introduction</Text>
            <Text style={chordStyles.descriptionText}>In music, chords (also known as harmonies) are created by playing 3 or more notes together at the same time. 
              {'\n\n'}
              A triad chord is a chord made of 3 notes, with each note separated by intervals of a third (major third = 4 half-steps/semi-tones, minor third = 3 half-steps/semi-tones), and is constructed by playing 3 notes from the same scale.</Text>
            
            <Text style={chordStyles.titleText}>Different types of Triad</Text>
            <Text style={chordStyles.descriptionText}>There are 4 different types of triad:
                {'\n\n'}
                <Text style={{fontWeight: 'bold'}}>1: </Text>Major
                {'\n'}
                <Text style={{fontWeight: 'bold'}}>2: </Text>Minor
                {'\n'}
                <Text style={{fontWeight: 'bold'}}>3: </Text>Augmented
                {'\n'}
                <Text style={{fontWeight: 'bold'}}>4: </Text>Diminished
                </Text>

            <Text style={chordStyles.titleText} >A note on building Triads</Text>
            <Text style={chordStyles.descriptionText}>There are a couple of different ways to build triads, the first involves measuring the intervals between the notes, similar to how we found scales - using a pattern of whole-steps (tones) and half-steps (semi-tones) to find the required notes. The second is to write out a scale and simply take the 1st, 3rd, and 5th notes/degrees from that scale.</Text>

            <Text style={chordStyles.titleText} >Build Method 1 - Step Pattern</Text>
            <Text style={chordStyles.descriptionText}>The formulas for calculating each type of triad chord are noted below, to keep it simple we will start from a root note <Text style={{fontWeight: 'bold'}}>(R)</Text> and count in half-steps <Text style={{fontWeight: 'bold'}}>(H)</Text> to find the next note: </Text>

            <Text style={chordStyles.titleText}>Major Triad: </Text>          
            <View style={chordStyles.bottomBorder}>
            <Text style={chordStyles.descriptionText}><Text style={{fontWeight: 'bold'}}>Formula:</Text> R - HHHH - HHH
            {'\n\n'}
            <Text style={{fontWeight: 'bold'}}>Example: </Text>Starting the root note C, count 4 half-steps (2 whole-steps) to the right to find the second note E, from there count 3 half-steps to find the 3rd note G.
            {'\n\n'}
            <Text style={{fontWeight: 'bold'}}>Result: </Text>This means the C major triad contains the following notes: <Text style={{fontWeight: 'bold'}}>C - E - G</Text>
            </Text>
            </View>

            <Text style={chordStyles.titleText}>Minor Triad: </Text>
            <View style={chordStyles.bottomBorder}>
            <Text style={chordStyles.descriptionText}><Text style={{fontWeight: 'bold'}}>Formula:</Text> R - HHH - HHHH
            {'\n\n'}
            <Text style={{fontWeight: 'bold'}}>Example: </Text>Starting the root note C, count 3 half-steps (1.5 whole-steps) to the right to find the second note D#, from there count 4 half-steps to find the 3rd note G.
            {'\n\n'}
            <Text style={{fontWeight: 'bold'}}>Result: </Text>This means the C minor triad contains the following notes:  <Text style={{fontWeight: 'bold'}}>C - D# - G</Text>
            </Text>
            </View>
            
            <Text style={chordStyles.titleText}>Augmented Triad: </Text>
            <View style={chordStyles.bottomBorder}>
              <Text style={chordStyles.descriptionText}><Text style={{fontWeight: 'bold'}}>Formula: </Text> R - HHHH - HHHH
              {'\n\n'}
              <Text style={{fontWeight: 'bold'}}>Example: </Text>Starting the root note C, count 4 half-steps (2 whole-steps) to the right to find the second note E, from there count 4 half-steps to find the 3rd note G#.
              {'\n\n'}
              <Text style={{fontWeight: 'bold'}}>Result: </Text>This means the C augmented triad contains the following notes:  <Text style={{fontWeight: 'bold'}}>C - E - G#</Text>
              </Text>
            </View>

            <Text style={chordStyles.titleText}>Diminished Triad: </Text>
            <View style={chordStyles.bottomBorder}>
            <Text style={chordStyles.descriptionText}><Text style={{fontWeight: 'bold'}}>Formula:</Text> R - HHH - HHH
            {'\n\n'}
            <Text style={{fontWeight: 'bold'}}>Example: </Text>Starting the root note C, count 3 half-steps (1.5 whole-steps) to the right to find the second note D#, from there count 3 half-steps to find the 3rd note G♭.
            {'\n\n'}
            <Text style={{fontWeight: 'bold'}}>Result: </Text>This means the C augmented triad contains the following notes:  <Text style={{fontWeight: 'bold'}}>C - D# - G♭</Text>
            </Text>
            </View>

            <Text style={chordStyles.titleText} >Build Method 2 - Derive from Scale</Text>
            <Text>This method involves taking the root note, 3rd note/degree, and 5th note/degree from a scale to find the triad. There is a couple of ways to do this, you can either write the scale out on a piece of paper and then highlight the 1st, 3rd, 5th notes, or if you know your scales well you can simply pull the 12st, 3rd, 5th notes from a scale and play them together,  </Text>

          </View>

          
        }
        sections={DATA}
        keyExtractor={(item, index) => item + index}
        renderItem={({ item }) => 
        <View style={{
              alignItems: 'center',
              marginTop: 10}}>
            <Text><Text style={{color: 'red'}}>{item.key} - </Text>{item.scale}</Text>
            <Image source={item.img} style={{resizeMode: 'contain', width: 200}} />
            </View>
      }
        renderSectionHeader={({ section: { title } }) => (
          <Text style={{marginTop: 20, fontWeight: 'bold'}}>{title}</Text>
        )}
      />
  </View>  
  );
}

/* *************** SEVENTHS ******************** */
const SeventhOverviewScreen = () => {
  return (
    <Text>Seventh Overview</Text>
  );
}

const MajorSeventhScreen = () => {
  return (
    <Text>Major Seventh</Text>
  );
}

const MinorSeventhScreen = () => {
  return (
    <Text>Minor Seventh</Text>
  );
}

const AugmentedSeventhScreen = () => {
  return (
    <Text>Augmented Seventh</Text>
  );
}

const DiminishedSeventhScreen = () => {
  return (
    <Text>Diminished Seventh</Text>
  );
}

/* *************** INVERTED ******************** */
const InvertedChordsScreen = () => {
  return (
    <Text>inverted</Text>
  );
}

/* *************** SUSPENDED ******************** */
const SuspendedChordsScreen = () => {
  return (
    <Text>suspended</Text>
  );
}

/* *************** CHORDS ******************** */
const NinthChordsScreen = () => {
  return (
    <Text>9th</Text>
  );
}

const EleventhChordsScreen = () => {
  return (
    <Text>11th</Text>
  );
}

const ThirteenthChordsScreen = () => {
  return (
    <Text>13th</Text>
  );
}

const chordStyles = StyleSheet.create({
  layout: {
     flex: 1, 
    //  alignItems: 'center',
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
    fontWeight: 'bold'
  },
  bottomBorder: {
    borderBottomWidth: 1,
    borderColor: 'black',
    marginBottom: 15
  }
});


export {
  ChordsOverviewScreen,
  TriadOverviewScreen,
  MajorTriadScreen,
  MinorTriadScreen,
  AugmentedTriadScreen,
  DiminishedTriadScreen,
  TriadChordsScreen,
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
}