import { Modal,View,Text,Button,StyleSheet,Image, Pressable } from "react-native";

export default function GameEnd({handleGameReset}){
    return (
    <Modal animationType="slide">
       <View style={styles.gameContainer}>
       <Image style={styles.image} source={require('../assets/images/genie2.avif')}/>
        <Text style={styles.heading}>Genie Won!!!</Text>
        <Pressable style={styles.button}  onPress={handleGameReset}>
        <Text style={styles.buttonText}> Restart </Text>
        </Pressable>
       </View>
       </Modal>
    );
}

const styles = StyleSheet.create({
  gameContainer: {
    flex: 1,
    backgroundColor: "#4B0082",
    alignItems: "center",
    width: "100%",
    height: "100%",
    justifyContent: "space-apart",
    padding: 40,
    // marginTop : 80
  },
  heading: {
    marginTop: 50,
    fontSize: 35,
     borderColor: "white",
    borderWidth: 3,
    padding: 16,
    marginBottom: 40,
    alignSelf: "center",
    marginLeft: 20,
    color : '#FFD700',
    fontWeight: "bold",
    textShadowColor: "rgba(0,0,0,0.75)",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 4,
  },
  image : {
    height: 400,
    width : 350,
    marginTop : 40,
    borderRadius : 40,
  },
  button : {
    backgroundColor: "#FFD700",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonText: {
    color: "#4A2D0B", // Dark brown
    fontSize: 18,
    fontWeight: "bold",
  },
});