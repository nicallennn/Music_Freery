import 'react-native-gesture-handler';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { 
  Text, 
  View, 
  FlatList, 
  TouchableOpacity,
  StyleSheet,
  Image
} from 'react-native';

const Scale = (props) => {
  const navigation = useNavigation();
  return (
    <View style={scaleStyles.layout}>
      
      <FlatList
        ListHeaderComponent={
          <View>
            {/* *********** INTRO AND DESCRIPTION ************* */}
            <Text style={scaleStyles.titleText}>Introduction</Text>

            <Text style={scaleStyles.descriptionText}>
              {props.info.intro_1}
              {"\n\n"}
              {props.info.intro_2}              
            </Text>              

            {/* *********** SCALE DEGREES ************* */}
            <Text style={scaleStyles.titleText}>Note/Scale Degrees</Text>
            <Text style={scaleStyles.descriptionText}>
              In the {props.info.title} the notes/scale degrees are given the following names:
              {"\n\n"}              

              <Text style={{fontWeight: 'bold'}}>1st: </Text>
              {props.info.degrees[0].degree}
              {"\n"}

              <Text style={{fontWeight: 'bold'}}>2nd: </Text>
              {props.info.degrees[1].degree}
              {"\n"}

              <Text style={{fontWeight: 'bold'}}>3rd: </Text>
              {props.info.degrees[2].degree}
              {"\n"}

              <Text style={{fontWeight: 'bold'}}>4th: </Text>
              {props.info.degrees[3].degree}
              {"\n"}

              <Text style={{fontWeight: 'bold'}}>5th: </Text>
              {props.info.degrees[4].degree}
              {"\n"}

              <Text style={{fontWeight: 'bold'}}>6th: </Text>
              {props.info.degrees[5].degree}
              {"\n"}

              <Text style={{fontWeight: 'bold'}}>7th: </Text>
              {props.info.degrees[6].degree}
              {"\n"}

              <Text style={{fontWeight: 'bold'}}>8th: </Text>
              {props.info.degrees[7].degree}
            </Text>

            {/* *********** PATTERN ************* */}
            <Text style={scaleStyles.titleText}>Pattern</Text>
            <Text style={scaleStyles.descriptionText}>
            The scale is created using the following pattern of whole-steps (tones) and half-steps (semi-tones), starting from the root note (R):
            {'\n\n'}

            <Text style={{fontWeight: 'bold'}}>{props.info.pattern}</Text>
            </Text>
            <Text style={scaleStyles.descriptionText}>
              <Text style={{fontWeight: 'bold'}}>Example: </Text>
              {props.info.example} 
              {'\n\n'}
              <Text style={{fontWeight: 'bold'}}>Result: </Text>
              {props.info.result}
              <Text style={{fontWeight: 'bold'}}> {props.info.resultScale}</Text> - this is shown in the graphic below:
            </Text>

            <View style={{
            alignItems: 'center',
            marginTop: 10}}>
            <Image source={props.info.positions[0].img} style={{resizeMode: 'contain', width: 200}} />
            </View>

            <View style={{
            alignItems: 'center',
            marginTop: 20}}>
              <Text style={scaleStyles.centerTitleText}>{props.info.title} for all root notes</Text>
            </View>
          </View>
        }
        data={props.info.positions}
        renderItem={({item}) => (
          // /* *********** POSITION GRAPHICS ************* */
          <View style={{
            alignItems: 'center',
            marginTop: 10}}>
          <Text><Text style={{color: 'red'}}>{item.key} - </Text>{item.scale}</Text>
          <Image source={item.img} style={{resizeMode: 'contain', width: 200}} />
          </View>
        )}
        ListFooterComponent={
          <View style={{marginTop: 20}}>
            {/* *********** EXERCISES ************* */}
            <Text style={scaleStyles.titleText}>Exercises</Text>
            <FlatList
              data={props.info.exercises}
              renderItem={({item}) => (
                <View style={{
                  // justifyContent: 'center',
                  marginTop: 10}}>
                  <Text Text><Text style={{fontWeight: 'bold'}}>{item.key}. </Text>{item.exercise}</Text>
                </View>
              )} />

            {/* ************** WHAT NEXT ***************** */}
            <View style={{marginTop: 20}}>
              <Text style={scaleStyles.titleText}>What next?</Text>  
              <Text style={scaleStyles.descriptionText}>
                {props.info.whatNext}
                {'\n\n'}
                {props.info.whatNext_2}

              </Text>

              <TouchableOpacity
                style={scaleStyles.buttonRounded}
                onPress={() => navigation.navigate(props.info.nextSubject)}>
                  <Text style={scaleStyles.buttonRoundedText}>{props.info.nextSubject}</Text>
              </TouchableOpacity>
            </View>
          </View>
        }
      />
      

      
    </View>
  );
}

export default Scale;

const scaleStyles = StyleSheet.create({
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