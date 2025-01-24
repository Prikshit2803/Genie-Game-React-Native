import { StatusBar } from 'expo-status-bar';
import { Modal, StyleSheet, Text, View, Alert } from 'react-native';
import NumberInput from './components/NumberInput';
import { useState } from 'react';
import NumberGuesser from './components/NumberGuesser';
import GameEnd from './components/GameEnd';

export default function App() {
  const[input,setInput] = useState('');
  const[isInputVisible,setIsInputVisible]=useState(true);
  
  function handleInputNumber(enteredNumber){
    setInput(enteredNumber);
    // console.log(enteredNumber);
  }

  function handleInputReset(){
    setInput('');
  }

  function handleInputConfirmation(){
    //store input
    //start guessing game
    if(input>100 || input<1){
      Alert.alert('Invalid Input', 'Input must be between 1 and 100', [
        {text: 'OK', onPress: () => {  handleInputReset();
          console.log('OK Pressed')     
        }},
      ]);
    }

    else
    setIsInputVisible(false);
  }

  function handleGameReset(){
    handleInputReset();
    setIsInputVisible(true);
  }

  return (
    <View style={styles.container}>
      {/* <GameEnd handleGameReset={handleGameReset}/> */}
     {isInputVisible && <NumberInput input={input} handleInput={handleInputNumber} handleReset={handleInputReset} handleConfirm={handleInputConfirmation}/>}
     {!isInputVisible && <NumberGuesser input={input} handleReset={handleGameReset} />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
