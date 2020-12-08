import 'react-native-gesture-handler';
import * as React from 'react';
import Scale from '../../components/Scale';
import MelMinorScale from '../../components/MelMinorScale';
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


const MajorScaleScreen = () => {
  return (
    <Scale info={majorScale} />
  );
}

const NatMinorScaleScreen = () => {
  return (
    <Scale info={natMinorScale} />
  );
}

const HarMinorScaleScreen = () => {
  return (
    <Scale info={harMinorScale} />
  );
}

const MelMinorScaleScreen = () => {
  return(
    <MelMinorScale info={melMinorScale} />
  );
}

const MajorPentatonicScaleScreen = () => {
  return (
    <Scale info={majorPentatonicScale} />
  );
}

const MinorPentatonicScaleScreen = () => {
  return (
    <Scale info={minorPentatonicScale} />
  );
}

const DorianModeScreen = () => {
  return (
    <Scale info={dorianScale} />
  );
}

const PhrygianModeScreen = () => {
  return (
    <Scale info={phrygianScale} />
  );
}

const LydianModeScreen = () => {
  return (
    <Scale info={lydianScale} />
  );
}

const MixolydianModeScreen = () => {
  return (
    <Scale info={mixolydianScale} />
  );
}

const LocrianModeScreen = () => {
  return (
    <Scale info={locrianScale} />
  );
}

export {
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
  LocrianModeScreen
};