import 'react-native-gesture-handler';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { 
  Text, 
  View, 
  TouchableOpacity,
  StyleSheet,

} from 'react-native';

const MenuButton = (props) => {
  const navigation = useNavigation();
  return (
    <View>
    <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate(props.info.link)}>
            <Text style={styles.buttonText}> {props.info.name} </Text>
      </TouchableOpacity>    
    </View>
)}

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

export default MenuButton;