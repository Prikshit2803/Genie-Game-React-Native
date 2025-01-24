import { Button, TextInput,View,Text,StyleSheet,Image,Dimensions } from "react-native";

const { width, height } = Dimensions.get('window');

export default function NumberInput({input,handleInput,handleReset,handleConfirm}){
   return (
    <View style={styles.input}>
       <Text style={styles.headingText} >Guess My Number</Text>
       <View style={styles.numberContainer}>
       <Text style={styles.enterText}>Enter a Number</Text>
       <TextInput  keyboardType="numeric" style={styles.inputNumber} onChangeText={handleInput} value={input} ></TextInput>
       <View style={styles.buttonContainer}>
        <View style={styles.button}>
       <Button  title="Reset" onPress={handleReset} color={"#FDCB58"} />
       </View>
       <View style={styles.button}>
       <Button  title="Confirm" onPress={handleConfirm} color={"#FDCB58"}/>
       </View>
       </View>
       </View>
       <Image style={styles.image} source={require('../assets/images/g.jpg')}/>
    </View>
       
   );
};


const styles = StyleSheet.create({
 input: {
    flex: 1,
    backgroundColor: '#066289',
    alignItems: 'center',
    justifyContent: 'flex-start', 
    padding : 20,
    paddingTop: 100,
    width: width,
        height: height,
  },
  headingText : {
    fontSize : 32,
    borderColor : '#FFFFFF',
    color: "#FDCB58",
    borderWidth : 5,
    padding : 15,
    marginBottom : 40,
    // alignSelf: 'flex-start',
    // marginLeft: 20,
    textAlign: "center",
  },
  numberContainer : {
    backgroundColor : '#4A148C',
    width : 320,
    padding : 25,
    borderRadius : 12,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 5,
  },
  enterText : {
    fontSize : 20,
    fontWeight: "500",
    color: "#FDCB58",
    textAlign: "center",
    marginBottom: 15,
    // alignSelf : 'center',
    marginBottom : 18,
  },
  inputNumber :{
    borderBottomColor : '#FDCB58',
    borderBottomWidth: 2,
    width: '30%',
    height: 45, 
    alignSelf : 'center',
    marginBottom: 20,
    // paddingLeft: 20,
    textAlign: "center",
    fontSize : 30,
    color: "#FFFFFF",
  },
  buttonContainer : {
    flexDirection : 'row',
    justifyContent : 'space-around'
  },
  button : {
    width : '45%',
    // marginHorizontal : 12,
  },
  image : {
    height: 300,
    width : 250,
    marginTop : 40
  }

});
