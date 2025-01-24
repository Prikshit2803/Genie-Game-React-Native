import { useState, useEffect } from "react";
import { Button, TextInput, View, Text, StyleSheet,Alert} from "react-native";
import GameEnd from "./GameEnd";
import Log from "./Log";

function RandomNumberGenerator(lowerLimit, upperLimit ) {
    // const min = Math.ceil(lowerLimit);
    // const max = Math.floor(upperLimit);
    const randomNumber = Math.floor(Math.random() * (upperLimit - lowerLimit + 1)) + lowerLimit;
    return randomNumber;
}
export default function NumberGuesser({input,handleReset}) {
    const[guess, setGuess] = useState(0);
    const[lowerLimit,setLowerLimit] = useState(1);
    const[upperLimit,setUpperLimit] = useState(100);
    const [round,setRound] = useState(1);
    // const g =  RandomNumberGenerator(lowerLimit,upperLimit);
    const [log,setLog] = useState([]);


    useEffect(() => {
        const initialGuess = RandomNumberGenerator(lowerLimit, upperLimit);
        setGuess(initialGuess);
        setLog((prevLog) => {
            const updatedLog = [...prevLog,{guess: initialGuess, round : round }];
            return updatedLog;
        });
      }, []);


    function handleMinusButton(){
        if(guess<=input){
                  Alert.alert('Wrong Input', 'Do not try to fool genie', [
                    {text: 'OK', onPress: () => {
                      console.log('OK Pressed')     
                    }},
                  ]);
        }
        else{
      const newGuess = RandomNumberGenerator(lowerLimit,guess-1);
       setUpperLimit(guess-1);
        setGuess(newGuess);
        setLog((prevLog) => {
            const updatedLog = [...prevLog,{guess: newGuess, round : round + 1}];
            return updatedLog;
        });
        setRound(prevRound => prevRound + 1);
    }
    }

    function handlePlusButton(){
        if(guess>=input){
            Alert.alert('Wrong Input', 'Do not try to fool genie', [
              {text: 'OK', onPress: () => {
                console.log('OK Pressed')     
              }},
            ]);
  }
  else{
        const newGuess = RandomNumberGenerator(guess+1,upperLimit);
        setLowerLimit(guess+1);
        setGuess(newGuess);
        setLog((prevLog) => {
            const updatedLog = [...prevLog,{guess: newGuess, round : round + 1}];
            return updatedLog;
        });
        setRound(prevRound => prevRound + 1);
    }
     }

      //console.log(guess + " === " + input)
     console.log("lowerLimit : " + lowerLimit + "  " + "upperLimit : " + upperLimit + " Round : " + round);
  return (
    <>
    <View style={styles.gameContainer}>
      <Text style={styles.heading}>System's Guess</Text>
      <View style={styles.guess}>
        <Text style={styles.guessText}>{guess}</Text>
        {(guess === Number(input)) && <GameEnd handleGameReset={handleReset}/>}
      </View>
      <View style={styles.guessContainer}>
        <Text style={styles.text}>Higher or Lower ?</Text>
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="-" color = '#edda61' onPress={handleMinusButton} />
          </View>
          <View style={styles.button}>
            <Button title="+" color = '#edda61' onPress={handlePlusButton} />
          </View>
        </View>
      </View>

      <Text>Logs:</Text>
      <Log logs={log}/>
     
    </View>
      </>
  );
}

const styles = StyleSheet.create({
  gameContainer: {
    flex: 1,
    backgroundColor: "#b39d0e",
    alignItems: "center",
    width: "100%",
    height: "100%",
    justifyContent: "flex-start",
    padding: 40,
    // marginTop : 80
  },
  heading: {
    marginTop: 50,
    fontSize: 35,
    borderColor: "yellow",
    borderWidth: 3,
    padding: 16,
    marginBottom: 40,
    alignSelf: "flex-start",
    marginLeft: 20,
    color : 'white'
  },

  guess: {
    marginTop: 50,
    fontSize: 35,
    borderColor: "yellow",
    borderWidth: 3,
    padding: 8,
    marginBottom: 40,
    alignSelf: "center",
    width : '60%'
  },
  guessContainer: {
    backgroundColor: "yellow",
    width: 300,
    padding: 20,
    borderRadius: 6,
  },
  guessText : {
    fontSize: 44,
    alignSelf: "center",
    padding : 16
  },
  text: {
    fontSize: 24,
    alignSelf: "center",
    marginBottom: 10,
    padding : 16
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: 'center',
    width : '100%',
    fontSize : 40,
  },
  button: {
    width: "40%",
    marginHorizontal: 12,
    backgroundColor : 'red',
  },
});
