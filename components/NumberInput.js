import { Button, TextInput,View,Text,StyleSheet } from "react-native";

export default function NumberInput({input,handleInput,handleReset,handleConfirm}){
   return (
    <View style={styles.input}>
       <Text style={styles.headingText} >Guess My Number</Text>
       <View style={styles.numberContainer}>
       <Text style={styles.enterText}>Enter a Number</Text>
       <TextInput  keyboardType="numeric" style={styles.inputNumber} onChangeText={handleInput} value={input}></TextInput>
       <View style={styles.buttonContainer}>
        <View style={styles.button}>
       <Button  title="Reset" onPress={handleReset} />
       </View>
       <View style={styles.button}>
       <Button  title="Confirm" onPress={handleConfirm} />
       </View>
       </View>
       </View>
    </View>
       
   );
};


const styles = StyleSheet.create({
 input: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start', 
    padding : 40,
    marginTop : 80
  },
  headingText : {
    fontSize : 29,
    borderColor : 'black',
    borderWidth : 2,
    padding : 8,
    marginBottom : 40,
    alignSelf: 'flex-start',
    marginLeft: 20,
  },
  numberContainer : {
    backgroundColor : 'yellow',
    width : 300,
    padding : 20,
    borderRadius : 6,
  },
  enterText : {
    fontSize : 24,
    alignSelf : 'center',
    marginBottom : 18,
  },
  inputNumber :{
    borderBottomColor : 'black',
    borderBottomWidth: 2,
    width: '30%',
    height: 40, 
    alignSelf : 'center',
    marginBottom: 20,
    paddingLeft: 20,
    fontSize : 30,
  },
  buttonContainer : {
    flexDirection : 'row',
    justifyContent : 'center'
  },
  button : {
    width : '40%',
    marginHorizontal : 12,
  }

});
