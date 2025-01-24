import { useState, useEffect } from "react";
import { Button, TextInput, View, Text, StyleSheet,Alert,ImageBackground,Dimensions} from "react-native";
import GameEnd from "./GameEnd";
import Log from "./Log";

const { width, height } = Dimensions.get('window');

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
                  Alert.alert('🧞‍♂️ Genie Says No!', 'Your magical mischief cannot fool the all-knowing genie!', [
                    {text: 'I Understand', onPress: () => {
                      console.log('OK Pressed')     
                    }},
                  ]);
                  return;
        }
      const newGuess = RandomNumberGenerator(lowerLimit,guess-1);
       setUpperLimit(guess-1);
        setGuess(newGuess);
        setLog((prevLog) => {
            const updatedLog = [...prevLog,{guess: newGuess, round : round + 1}];
            return updatedLog;
        });
        setRound(prevRound => prevRound + 1);
    }

    function handlePlusButton(){
        if(guess>=input){
            Alert.alert('🧞‍♂️ Genie Says No!', 'Your magical mischief cannot fool the all-knowing genie!', [
                {text: 'I Understand', onPress: () => {
                  console.log('OK Pressed')     
                }},
              ]);
              return;
  }
        const newGuess = RandomNumberGenerator(guess+1,upperLimit);
        setLowerLimit(guess+1);
        setGuess(newGuess);
        setLog((prevLog) => {
            const updatedLog = [...prevLog,{guess: newGuess, round : round + 1}];
            return updatedLog;
        });
        setRound(prevRound => prevRound + 1);
     }

      //console.log(guess + " === " + input)
     console.log("lowerLimit : " + lowerLimit + "  " + "upperLimit : " + upperLimit + " Round : " + round);
  return (
     <ImageBackground 
      source={require('../assets/images/og.jpg')} 
      style={styles.backgroundImage}>
    <View style={styles.gameContainer}>
    <View style={styles.headerContainer}>
      <Text style={styles.heading}>Genie's Guess</Text>
      </View>
      <View style={styles.guess}>
        <Text style={styles.guessText}>{guess}</Text>
        {(guess === Number(input)) && <GameEnd handleGameReset={handleReset}/>}
      </View>
      <View style={styles.guessContainer}>
        <Text style={styles.text}>Higher or Lower?</Text>
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="-" color = '#edda61' onPress={handleMinusButton} />
          </View>
          <View style={styles.button}>
            <Button title="+" color = '#edda61' onPress={handlePlusButton} />
          </View>
        </View>
      </View>

      <Text style={styles.genieText}>🕯️ Genie's Memory Scroll</Text>
      <Log logs={log}/>
     
    </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        width: width,
        height: height,
      },
  gameContainer: {
    flex: 1,
    backgroundColor: '',
    padding: 20,
    alignItems: 'center',
    paddingTop: 70,
    // marginTop : 80
  },
  headerContainer: {
    width: width * 0.9,
    alignItems: 'center',
    marginBottom: 10,
  },
  heading: {
    // marginTop: 50,
    fontSize: 32,
    borderColor: "#FFD700",
    borderWidth: 3,
    padding: 16,
    // marginBottom: 40,
    // alignSelf: "center",
    // marginLeft: 20,
    color : '#FFD700',
    textAlign: "center",
    textShadowColor: 'rgba(255,215,0,0.75)',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
    fontWeight: '700',
  },

  guess: {
    marginTop: 50,
    fontSize: 35,
    borderColor: "#FFD700",
    borderWidth: 3,
    padding: 8,
    marginBottom: 40,
    alignSelf: "center",
    width : '60%',
    borderRadius: 15,
  },
  guessContainer: {
    backgroundColor: "#FFD700",
    width: 300,
    padding: 20,
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.30,
    shadowRadius: 4.65,
    elevation: 8,
    marginBottom : 20,
  },
  guessText : {
    fontSize: 44,
    alignSelf: "center",
    padding : 16,
    color: 'white',
    fontWeight: 'bold'
  },
  text: {
    fontSize: 24,
    alignSelf: "center",
    marginBottom: 10,
    padding : 16,
    color: '#7f54d6',
    fontWeight: '500',
  },
  genieText: {
    fontSize: 24,
    alignSelf: "center",
    marginBottom: 10,
    padding : 16,
    color: 'white',
    fontWeight: '500',
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: 'center',
    width : '100%',
    // fontSize : 40,
  },
  button: {
    width: "40%",
    marginHorizontal: 12,
    backgroundColor : '#4B0082',
  },
});
